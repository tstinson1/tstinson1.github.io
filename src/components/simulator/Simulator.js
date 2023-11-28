import {useState, useEffect} from 'react';
import Timer from './Timer';
import Grid from './automata/Grid'

const Simulator = () => {
    /**
     * Timer State
     */
    const [timer, setTimer] = useState(0);
    const [update, setUpdate] = useState(false);
    const [runTimer, setRunTimer] = useState(false);
    const [incrementTimer, setIncrementTimer] = useState(false);

    const transitions = {'false-falsefalsefalsefalse': false, 'false-falsefalsefalsetrue': false, 'false-falsefalsetruefalse': false, 'false-falsefalsetruetrue': false, 'false-falsetruefalsefalse': false, 'false-falsetruefalsetrue': false, 'false-falsetruetruefalse': false, 'false-falsetruetruetrue': true, 'false-truefalsefalsefalse': false, 'false-truefalsefalsetrue': false, 'false-truefalsetruefalse': false, 'false-truefalsetruetrue': true, 'false-truetruefalsefalse': false, 'false-truetruefalsetrue': true, 'false-truetruetruefalse': true, 'false-truetruetruetrue': false,
    'true-falsefalsefalsefalse': false, 'true-falsefalsefalsetrue': false, 'true-falsefalsetruefalse': false, 'true-falsefalsetruetrue': true, 'true-falsetruefalsefalse': false, 'true-falsetruefalsetrue': true, 'true-falsetruetruefalse': true, 'true-falsetruetruetrue': true, 'true-truefalsefalsefalse': false, 'true-truefalsefalsetrue': true, 'true-truefalsetruefalse': true, 'true-truefalsetruetrue': true, 'true-truetruefalsefalse': true, 'true-truetruefalsetrue': true, 'true-truetruetruefalse': true, 'true-truetruetruetrue': false}

    useEffect(() => {
        if (runTimer) {
            const interval = setInterval(() => {
                if(!update) {
                    setTimer(timer +1);
                    setUpdate(true);
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

    

    return (
        <>
            <Grid neighborhood={'Von Neumann'} transitions={transitions} update={update} setUpdate={setUpdate}/>
            <Timer timer={timer} runTimer={runTimer} incrementTimer={incrementTimer} setRunTimer={setRunTimer} setIncrementTimer={setIncrementTimer} />
        </>
    );
}

export default Simulator;