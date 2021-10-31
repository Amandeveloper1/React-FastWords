import React from 'react'

export default function Alert(props) {
    if (props.alert !== null) {
        let close = document.getElementById('close');
        close.click();
    }
    const alertnull = () => {
        props.showAlert(null)
    }

    return (<>
        <button type="button" id='close' className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>
        {props.alert && <div className="modal fade show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">FastWrods</h5>
                    </div>
                    <div className="modal-body">
                        {props.alert}
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={alertnull} className="btn btn-primary" data-bs-dismiss="modal">Ok</button>
                    </div>
                </div>
            </div>
        </div>}
    </>

    )
}
