"use client"
export default function Errorboundry ({error,reset}:{
    error:Error;
    reset: ()=>void;
}) {

    return(
        <div>
            {error.message}
            <button onClick={reset}>Try again</button>
        </div>
    )
    
}