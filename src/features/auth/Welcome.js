import { Link } from'react-router-dom'
import { Label } from '../../components/ui/label'
import useAuth from '../../hooks/useAuth'

const Welcome = () => {

  const { username, isManager, isAdmin } = useAuth()
  
  const date = new Date();
  const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date);

  const content = (
    <section className="flex flex-col text-white gap-4">
      
      <p className="text-gray-400 italic text-sm">
        {today}
      </p>
      <h1>
        Welcome {username}!
      </h1>
      <div className="flex flex-col gap-4">
        <div>
          <Label>Notes</Label> 
          <p><span>• </span><Link to="/dash/notes">View tasks</Link></p>
          <p><span>• </span><Link to="/dash/notes/new">Add a new task</Link></p>
        </div>
        {(isManager || isAdmin) &&
          <div>
            <Label>Users</Label> 
            <p><span>• </span><Link to="/dash/users">View User Settings</Link></p>
            <p><span>• </span><Link to="/dash/users/new">Add a new user</Link></p>
          </div>
        }
      </div>
      <div className="min-h-full">

      </div>
    </section>
  )

  return content
}

export default Welcome