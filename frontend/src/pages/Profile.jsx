import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import api from '../utils/api'
import { ArrowLeft, User, Mail, Edit2, Save, X } from 'lucide-react'

function Profile() {
  const { user, updateUser, logout } = useAuth()
  console.log('Profile Debug - User:', user)
  console.log('Profile Debug - User authenticated:', !!user)

  const [editing, setEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: user?.bio || '',
    avatar: user?.avatar || '',
  })
  console.log('Profile Debug - FormData:', formData)
  console.log('Profile Debug - Editing state:', editing)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    console.log('Profile Debug - useEffect triggered, user:', user)
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        bio: user.bio || '',
        avatar: user.avatar || '',
      })
      console.log('Profile Debug - FormData updated from user:', {
        name: user.name,
        email: user.email,
        bio: user.bio || '',
        avatar: user.avatar || '',
      })
    }
  }, [user])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Profile Debug - Form submitted, editing:', editing, 'formData:', formData)
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      console.log('Profile Debug - Making API call to update profile')
      const { data } = await api.put('/auth/profile', formData)
      console.log('Profile Debug - API response:', data)

      if (data.success) {
        updateUser(data.data)
        setEditing(false)
        setMessage({ type: 'success', text: 'Profile updated successfully!' })
        console.log('Profile Debug - Profile updated successfully')
      }
    } catch (error) {
      console.error('Profile Debug - API error:', error)
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Failed to update profile',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    setFormData({
      name: user.name,
      email: user.email,
      bio: user.bio || '',
      avatar: user.avatar || '',
    })
    setEditing(false)
    setMessage({ type: '', text: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="text-gray-600 hover:text-primary-600">
                <ArrowLeft size={24} />
              </Link>
              <h1 className="text-2xl font-bold text-primary-600">Profile</h1>
              {/* Debug info */}
              <span className={`text-sm px-2 py-1 rounded ${user ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {user ? 'Authenticated' : 'Not Authenticated'}
              </span>
            </div>
            <button onClick={logout} className="text-gray-700 hover:text-red-600">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="card">
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              {formData.avatar ? (
                <img
                  src={formData.avatar}
                  alt={formData.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <User className="text-primary-600" size={48} />
              )}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{formData.name}</h2>
            <p className="text-gray-600">{formData.email}</p>
          </div>

          {/* Message */}
          {message.text && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-600 border border-green-200'
                  : 'bg-red-50 text-red-600 border border-red-200'
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Profile Form */}
          <form onSubmit={handleSubmit}>
            {/* Edit Mode Indicator */}
            {editing && (
              <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-600 text-sm font-medium">✏️ Edit Mode Active - Make your changes and click "Save"</p>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!editing || loading}
                  className={`input ${!editing ? 'bg-gray-50 text-gray-600 cursor-not-allowed' : 'bg-white border-primary-300 focus:border-primary-500 focus:ring-primary-200'}`}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!editing || loading}
                    className={`input pl-10 ${!editing ? 'bg-gray-50 text-gray-600 cursor-not-allowed' : 'bg-white border-primary-300 focus:border-primary-500'}`}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  disabled={!editing || loading}
                  rows={4}
                  className={`input ${!editing ? 'bg-gray-50 text-gray-600 cursor-not-allowed' : 'bg-white border-primary-300 focus:border-primary-500 focus:ring-primary-200'}`}
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div>
                <label htmlFor="avatar" className="block text-sm font-medium text-gray-700 mb-2">
                  Avatar URL
                </label>
                <input
                  type="url"
                  id="avatar"
                  name="avatar"
                  value={formData.avatar}
                  onChange={handleChange}
                  disabled={!editing || loading}
                  className={`input ${!editing ? 'bg-gray-50 text-gray-600 cursor-not-allowed' : 'bg-white border-primary-300 focus:border-primary-500 focus:ring-primary-200'}`}
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
            </div>

            {/* Action Buttons: Save/Cancel are inside the form when editing */}
            {editing && (
              <div className="mt-8 flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save size={20} />
                      Save Changes
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={loading}
                  className="btn btn-secondary flex items-center gap-2"
                >
                  <X size={20} />
                  Cancel
                </button>
              </div>
            )}
          </form>

          {/* Edit button placed outside the form to avoid accidental submit */}
          {!editing && (
            <div className="mt-4 flex gap-4">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  console.log('Profile Debug - Edit button clicked (outside form), current editing state:', editing)
                  setEditing(true)
                }}
                className="btn btn-primary flex items-center gap-2"
              >
                <Edit2 size={20} />
                Edit Profile
              </button>
            </div>
          )}

          {/* Account Stats */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Member Since</p>
                <p className="text-lg font-medium text-gray-900">
                  {new Date(user?.createdAt || Date.now()).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">User ID</p>
                <p className="text-lg font-medium text-gray-900 truncate">{user?._id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
