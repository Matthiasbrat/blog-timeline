function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src="" alt="" className="sidebar-logo" />
                <div className="sidebar-title"></div>
            </div>
            <div className="sidebar-content">
                <ul>
                    <li>
                        <a href="#"><i className="fas fa-plus"></i>timeline</a>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-plus"></i>articles</a>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-plus"></i>add</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar