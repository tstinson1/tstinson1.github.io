import { useEffect, useState } from "react";
import Cell from "./Cell";
const Grid = ({update, setUpdate, neighborhood, transitions, resetGrid, setResetGrid}) => {
    const intitialState = Array.from({length: 22},()=> Array.from({length: 32}, () => 0));
    const [grid, setGrid] = useState(intitialState);
    

    const updateGrid = (row, col, newState) => {
        let copy = [...grid];
        copy[row][col] = newState
        setGrid(copy);
    }

    const nextGeneration = () => {
        var next = grid.map((arr) => {
            return arr.slice();
        });
        for (let r = 2; r < grid.length-2; r++) {
            for (let c = 2; c < grid[0].length-2; c++){
                if (grid[r][c] === undefined) {
                    console.log('danger')
                    continue;
                }
                const currState = (grid[r][c]).toString()+'-';
                let neighbors = 0;
                if (neighborhood === 0) {
                    neighbors += grid[r-1][c]
                    neighbors += grid[r][c-1]
                    neighbors += grid[r+1][c]
                    neighbors += grid[r][c+1]
                } else if (neighborhood === 1) {
                    neighbors += grid[r-1][c-1]
                    neighbors += grid[r-1][c]
                    neighbors += grid[r-1][c+1]
                    neighbors += grid[r][c-1]
                    neighbors += grid[r][c+1]
                    neighbors += grid[r+1][c-1]
                    neighbors += grid[r+1][c]
                    neighbors += grid[r+1][c+1]
                } else {
                    neighbors += grid[r-2][c]
                    neighbors += grid[r-1][c]
                    neighbors += grid[r][c-2]
                    neighbors += grid[r][c-1]
                    neighbors += grid[r][c+1]
                    neighbors += grid[r][c+2]
                    neighbors += grid[r+1][c]
                    neighbors += grid[r+2][c]
                }
                
                const key = currState+neighbors.toString();
                if (transitions[key] === undefined) {
                    console.log('badstring', key)
                }
                next[r][c] = transitions[key];
            }
        }
        setGrid(next);
    }

    useEffect(() => {
        if (update) {
            nextGeneration()
            setUpdate(false);
        }
        if (resetGrid) {
            setGrid(intitialState);
            setResetGrid(false);
        }
    }, [update, resetGrid])

    return(
        <div>
            {grid.map((row, r) => { if (r < 2 || r >= grid.length - 2) {return <></>}
                return (<div key={r}>
                    {row.map((col, c) => { if (c < 2 || c >= grid[0].length - 2) {return <></>}
                    else return (<Cell key={r+c} col={c} row={r} state={col} updateGrid={updateGrid}/>)
            })}
                </div>)})}
        </div>
    );
}

export default Grid;