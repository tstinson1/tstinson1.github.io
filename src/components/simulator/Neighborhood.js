const Neighborhood = ({neighborhood, toggleDisplayNeighborhood, changeNeighborhood}) => {
    return (
        <>
            <select className="btn btn-primary dropdown-toggle"onChange={changeNeighborhood} value={neighborhood}>
                <option value="0">Von Neumann</option>
                <option value="1">Moore</option>
                <option value="2">Extended Von Neumann</option>
            </select>
        </>
    );
};

export default Neighborhood