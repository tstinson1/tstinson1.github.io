import { useEffect, useState } from "react";
import Cell from "./Cell";
const Grid = ({update, setUpdate, neighborhood, transitions}) => {
    const intitialState = Array.from({length: 14},()=> Array.from({length: 14}, () => false));
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
                }
                const currState = (grid[r][c]).toString()+'-';
                const neighbors = []
                neighbors.push(grid[r-1][c])
                neighbors.push(grid[r][c-1])
                neighbors.push(grid[r][c+1])
                neighbors.push(grid[r+1][c])
                const key = currState+neighbors.join('');
                if (transitions[key] == undefined) {
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
    }, [update])

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