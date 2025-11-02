import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getArchetypeById } from '../data/archetypes';
import { useUser } from '../context/UserContext';
import Button from '../components/Button';
import Card from '../components/Card';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [name, setName] = useState(user?.name || '');
  const [isEditing, setIsEditing] = useState(false);
  
  if (!user) return null;
  
  const archetype = getArchetypeById(user.archetype || '');
  
  const handleUpdateProfile = () => {
    setUser({
      ...user,
      name
    });
    setIsEditing(false);
  };
  
  const handleResetProgress = () => {
    if (confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
      setUser({
        ...user,
        completedScenarios: [],
        growthAreas: []
      });
    }
  };
  
  const handleRetakeAssessment = () => {
    if (confirm('Are you sure you want to retake the assessment? Your current archetype will be reset.')) {
      navigate('/assessment');
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Your Profile</h1>
          <p className="text-gray-600">
            Manage your account and preferences
          </p>
        </div>
        
        {/* Profile Info */}
        <Card className="mb-8 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Profile Information
          </h2>
          
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex space-x-3">
                <Button
                  onClick={handleUpdateProfile}
                >
                  Save Changes
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setName(user.name);
                    setIsEditing(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Name</h3>
                <p className="mt-1 text-gray-900">{user.name}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Archetype</h3>
                <p className="mt-1 text-gray-900">{archetype?.name || 'Not determined'}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Progress</h3>
                <p className="mt-1 text-gray-900">
                  {user.completedScenarios.length} scenarios completed, {user.growthAreas.length} growth areas identified
                </p>
              </div>
              
              <Button
                variant="outline"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            </div>
          )}
        </Card>
        
        {/* Account Actions */}
        <Card className="border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Account Actions
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Retake Assessment</h3>
              <p className="text-gray-600 mb-3">
                Take the archetype assessment again to see if your work style has evolved.
              </p>
              <Button
                variant="outline"
                onClick={handleRetakeAssessment}
              >
                Retake Assessment
              </Button>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-medium text-gray-800 mb-2">Reset Progress</h3>
              <p className="text-gray-600 mb-3">
                This will reset all your completed scenarios and growth area progress.
              </p>
              <Button
                variant="outline"
                className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
                onClick={handleResetProgress}
              >
                Reset Progress
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;