const Timer = ({
    timer,
    runTimer,
    setRunTimer,
    setIncrementTimer,
    reset
}) => {
    const toggleRunTimer = () => {
        setRunTimer(!runTimer);
    };

    const toggleIncrementTimer = () => {
        setIncrementTimer(true);
    };

    return (
        <>
            <div className="btn-group" role="group">
                <button
                    onClick={()=>{reset()}}
                    className="btn btn-primary"
                    
                >{timer}</button>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        toggleRunTimer();
                    }}
                >
                    {runTimer ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pause-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-play-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg>
                    )}
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        toggleIncrementTimer();
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default Timer;
