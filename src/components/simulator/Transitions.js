const Transitions = ({neighborhood, transitions, setTransitions, transitionChangeHandler, toggleDisplayTransitions}) => {
    const numTransitions = neighborhood === 0 ? 10 : 18;
    const inputs = [];
    const labels = [];
    const half = numTransitions / 2;
    for (let i = 0; i < numTransitions; i++) {
        let label = '';
        let name = '';
        if (i < half) {
            label = label + 'Current State: 0 | Alive neighbors: ' + (i%half).toString() + ': ';
            name = '0-' + (i%half).toString();
        } else {
            label = label + 'Current State: 1 | Alive neighbors: ' + (i%half).toString() + ': ';
            name = '1-' + (i%half).toString();
        }
        labels.push(label);
        inputs.push((<input type='number' name={name} onChange={transitionChangeHandler} value={transitions[name]}></input>))
    }
    return (
        <>
            <div className='card border-dark mx-auto'>
                <div class="card-body">
                    {inputs.map((input, i) => {
                        return (
                            <div>
                                <label>{labels[i]}</label> 
                                {input}
                            </div>
                        );
                    })}
                    <button className="btn btn-primary mx-auto" onClick={()=>{toggleDisplayTransitions()}}>Submit</button>
                </div>
             </div>
        </>
    );
};

export default Transitions;