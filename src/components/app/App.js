import './App.css';
import User from '@bit/davlac.manage-items.user';
import Search from '@bit/davlac.manage-items.search';
import Items from '@bit/davlac.manage-items.items';

const App = () => {
    return (
        <div className="Container">
            <h1>Container</h1>
            <div className="Children">
                <User className="Child"/>
                <Search className="Child"/>
                <Items className="Child"/>
            </div>
        </div>
    );
}

export default App;
