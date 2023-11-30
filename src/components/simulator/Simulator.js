import {useState, useEffect} from 'react';
import Timer from './Timer';
import Grid from './automata/Grid'
import Neighborhood from './Neighborhood';
import Transitions from './Transitions';

const Simulator = () => {
    /**
     * Timer State
     */
    const [timer, setTimer] = useState(0);
    const [update, setUpdate] = useState(false);
    const [runTimer, setRunTimer] = useState(false);
    const [incrementTimer, setIncrementTimer] = useState(false);

    /**
     * Transition State
     */
    const defaultOther = {'1-0': 0, '1-1': 0, '1-2': 1, '1-3': 1, '1-4': 0, '1-5': 0, '1-6': 0, '1-7': 0, '1-8': 0, '0-0': 0, '0-1': 0, '0-2': 0, '0-3': 1, '0-4': 0, '0-5': 0, '0-6': 0, '0-7': 0, '0-8': 0};
    const defaultVN = {'1-0': 0, '1-1': 0, '1-2': 1, '1-3': 1, '1-4': 0, '0-0': 0, '0-1': 0, '0-2': 0, '0-3': 1, '0-4': 0};
    const [transitions, setTransitions] = useState(defaultVN);
    const [displayTransitions, setDisplayTransitions] = useState(false);

    
    /**
     * Neighborhood state
     * 0 = Von Neumann
     * 1 = Moore
     * 2 = Extended Von Neumann
     */
    const [neighborhood, setNeighborhood] = useState(0);

    const [resetGrid, setResetGrid] = useState(false);


    useEffect(() => {
        if (runTimer) {
            const interval = setInterval(() => {
                if(!update) {
                    setTimer(timer +1);
                    setUpdate(true);
                    console.log(neighborhood)
                }
            }, 500);
            return () => {
                clearInterval(interval);
            };
        }
        else if (incrementTimer) {
            if (!update) {
                setIncrementTimer(false);
                setTimer(timer + 1);
                setUpdate(true);
            }
        }
    }, [timer, runTimer, incrementTimer, update]);


    const toggleDisplayTransitions = () => {
        setDisplayTransitions(!displayTransitions)
        console.log(transitions)
    }

    const changeNeighborhood = (event) => {
        const newValue = parseInt(event.target.value);
        console.log(neighborhood, newValue)
        if (neighborhood === 0 && newValue !== 0) {
            console.log('updated');
            setTransitions(defaultOther);
        }
        if (neighborhood !== 0 && newValue === 0) {
            console.log('updated');
            setTransitions(defaultVN);
        }
        setNeighborhood(newValue);
    }

    const reset = () => {
        setTimer(0);
        setResetGrid(true);
    }

    const transitionChangeHandler = (e) => {
        let { name, value: newValue } = e.target;
        setTransitions({
          ...transitions,
          [name]: parseInt(newValue)
        });
    }


    if  (!displayTransitions) {
        return (
            <>
                <div className='card border-dark mx-auto'>
                    <div class="card-body">
                        <Grid neighborhood={neighborhood} transitions={transitions} update={update} setUpdate={setUpdate} resetGrid={resetGrid} setResetGrid={setResetGrid}/>
                    </div>
                </div>
                <div className='padding'>
                    <button className='btn btn-primary' onClick={()=>{toggleDisplayTransitions()}}>Set Transitions</button>
                    <Timer timer={timer} runTimer={runTimer} setRunTimer={setRunTimer} setIncrementTimer={setIncrementTimer} reset={reset}/>
                    <Neighborhood neighborhood={neighborhood} changeNeighborhood={changeNeighborhood}/>
                </div>
            </>
        );
    } else {
        return (
            <>
                <Transitions transitions={transitions} neighborhood={neighborhood} setTransitions={setTransitions} transitionChangeHandler={transitionChangeHandler} toggleDisplayTransitions={toggleDisplayTransitions}/>
            </>
        );
    }
}

export default Simulator;