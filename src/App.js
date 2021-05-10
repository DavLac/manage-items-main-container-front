import './App.css';
import User from '@bit/davlac.manage-items.user';

function App() {
    return (
        <div className="Container">
            <h1>Container</h1>
            <div className="Children">
                <User className="Child"/>
                <User className="Child"/>
                <User className="Child"/>
            </div>
        </div>

    );
}

export default App;
