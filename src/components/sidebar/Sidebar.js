import { IoLibrary } from "react-icons/io5";

const Sidebar = () => {
    
    return (
        <div className="flex-shrink-0 p-3 my_sidebar">
            <a href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                <IoLibrary size={24} color="#864AF9" />
                <span className="fs-5 fw-semibold ms-2">Dev Alma Mater</span>
            </a>
            <ul className="list-unstyled ps-0">
                <li className="my-2 py-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                    Home
                    </button>
                    <div className="collapse" id="home-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li className="my-2 py-1"><a href="#abc" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
                            <li className="my-2 py-1"><a href="#abc" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a></li>
                            <li className="my-2 py-1"><a href="#abc" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a></li>
                        </ul>
                    </div>
                </li>
                <li className="my-2 py-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                    Dashboard
                    </button>
                    <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li className="my-2 py-1"><a href="#abc" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
                            <li className="my-2 py-1"><a href="#abc" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li>
                            <li className="my-2 py-1"><a href="#abc" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li>
                            <li className="my-2 py-1"><a href="#abc" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li>
                        </ul>
                    </div>
                </li>
                <li className="my-2 py-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                    Orders
                    </button>
                    <div className="collapse" id="orders-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li className="my-2 py-1"><a href="#abc" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
                            <li className="my-2 py-1"><a href="#abc" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
                            <li className="my-2 py-1"><a href="#abc" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
                            <li className="my-2 py-1"><a href="#abc" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
                        </ul>
                    </div>
                </li>
                <li className="my-2 py-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                    Account
                    </button>
                    <div className="collapse" id="account-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li className="my-2 py-1"><a href="#abc" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</a></li>
                            <li className="my-2 py-1"><a href="#abc" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</a></li>
                            <li className="my-2 py-1"><a href="#abc" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</a></li>
                            <li className="my-2 py-1"><a href="#abc" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar;