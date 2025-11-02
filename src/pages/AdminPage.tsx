import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import Button from '../components/Button';
import Card from '../components/Card';

type ContentType = 'topics' | 'videos' | 'interactives' | 'articles';

const AdminPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<ContentType>('topics');
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [editingSubtopic, setEditingSubtopic] = useState<any | null>(null);

  useEffect(() => {
    loadItems();
  }, [selectedType]);

  async function loadItems() {
    try {
      setLoading(true);
      setError(null);

      let query = supabase.from(selectedType);

      if (selectedType === 'topics') {
        // Load topics with their subtopics
        query = query.select(`
          *,
          subtopics (
            *,
            videos (*),
            interactives (*),
            articles (*)
          )
        `);
      } else {
        // Load content items with their relationship chain
        query = query.select(`
          *,
          subtopics (
            id,
            title,
            topics (
              id,
              title
            )
          )
        `);
      }

      const { data, error } = await query;
      if (error) throw error;
      setItems(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load items');
    } finally {
      setLoading(false);
    }
  }

  async function handleSaveTopic(topic: any) {
    try {
      setError(null);
      const { id, subtopics, ...values } = topic;

      // Save or update the topic
      const { data: savedTopic, error: topicError } = id
        ? await supabase.from('topics').update(values).eq('id', id).select().single()
        : await supabase.from('topics').insert(values).select().single();

      if (topicError) throw topicError;

      setEditingItem(null);
      loadItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save topic');
    }
  }

  async function handleSaveSubtopic(subtopic: any, topicId: string) {
    try {
      setError(null);
      const { id, ...values } = subtopic;
      values.topic_id = topicId;

      const { error } = id
        ? await supabase.from('subtopics').update(values).eq('id', id)
        : await supabase.from('subtopics').insert(values);

      if (error) throw error;

      setEditingSubtopic(null);
      loadItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save subtopic');
    }
  }

  async function handleDelete(type: string, id: string) {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      setError(null);
      const { error } = await supabase.from(type).delete().eq('id', id);
      if (error) throw error;
      loadItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete item');
    }
  }

  function renderTopicForm() {
    if (!editingItem) return null;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveTopic(editingItem);
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={editingItem.title || ''}
            onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={editingItem.description || ''}
            onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={() => setEditingItem(null)}>
            Cancel
          </Button>
          <Button type="submit">Save Topic</Button>
        </div>
      </form>
    );
  }

  function renderSubtopicForm(topicId: string) {
    if (!editingSubtopic) return null;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveSubtopic(editingSubtopic, topicId);
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={editingSubtopic.title || ''}
            onChange={(e) => setEditingSubtopic({ ...editingSubtopic, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={editingSubtopic.description || ''}
            onChange={(e) => setEditingSubtopic({ ...editingSubtopic, description: e.target.value })}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Content (Markdown)</label>
          <textarea
            value={editingSubtopic.content || ''}
            onChange={(e) => setEditingSubtopic({ ...editingSubtopic, content: e.target.value })}
            rows={10}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 font-mono"
            required
          />
        </div>

        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={() => setEditingSubtopic(null)}>
            Cancel
          </Button>
          <Button type="submit">Save Subtopic</Button>
        </div>
      </form>
    );
  }

  const contentTypes: ContentType[] = ['topics', 'videos', 'interactives', 'articles'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
          <p className="text-gray-600">Manage your learning platform content</p>
        </div>

        <div className="mb-8">
          <div className="flex space-x-4">
            {contentTypes.map(type => (
              <Button
                key={type}
                variant={selectedType === type ? 'primary' : 'outline'}
                onClick={() => setSelectedType(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
            {error}
          </div>
        )}

        <div className="space-y-6">
          <Button
            onClick={() => setEditingItem({})}
            className="mb-4"
          >
            Add New {selectedType.slice(0, -1)}
          </Button>

          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : (
            <div className="space-y-6">
              {selectedType === 'topics' ? (
                // Render topics with their subtopics
                items.map(topic => (
                  <Card key={topic.id} className="p-6">
                    <div className="mb-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{topic.title}</h3>
                          <p className="text-gray-600 mt-1">{topic.description}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setEditingItem(topic)}
                          >
                            Edit Topic
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50"
                            onClick={() => handleDelete('topics', topic.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-lg font-medium text-gray-900">Subtopics</h4>
                          <Button
                            size="sm"
                            onClick={() => setEditingSubtopic({ topic_id: topic.id })}
                          >
                            Add Subtopic
                          </Button>
                        </div>

                        <div className="space-y-4">
                          {topic.subtopics?.map((subtopic: any) => (
                            <div
                              key={subtopic.id}
                              className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h5 className="font-medium text-gray-900">{subtopic.title}</h5>
                                  <p className="text-gray-600 text-sm mt-1">{subtopic.description}</p>
                                </div>
                                <div className="flex space-x-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setEditingSubtopic(subtopic)}
                                  >
                                    Edit
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-red-600 border-red-200 hover:bg-red-50"
                                    onClick={() => handleDelete('subtopics', subtopic.id)}
                                  >
                                    Delete
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                // Render other content types
                items.map(item => (
                  <Card key={item.id} className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                        {item.subtopics && (
                          <p className="text-sm text-gray-500 mt-2">
                            Subtopic: {item.subtopics.title}
                            {item.subtopics.topics && ` (Topic: ${item.subtopics.topics.title})`}
                          </p>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingItem(item)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-200 hover:bg-red-50"
                          onClick={() => handleDelete(selectedType, item.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          )}
        </div>

        {/* Topic Edit Modal */}
        {editingItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {editingItem.id ? 'Edit' : 'Add'} Topic
                </h2>
                {renderTopicForm()}
              </div>
            </Card>
          </div>
        )}

        {/* Subtopic Edit Modal */}
        {editingSubtopic && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {editingSubtopic.id ? 'Edit' : 'Add'} Subtopic
                </h2>
                {renderSubtopicForm(editingSubtopic.topic_id)}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;