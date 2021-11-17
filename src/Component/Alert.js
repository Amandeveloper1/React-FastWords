import React from 'react'
import './Css/alert.css';

export default function Alert(props) {

    const alertnull = () => {
        props.setAlert('notset')
    }

    return (<>
        {/* <button type="button" id='close' className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
        </div>} */}

        {props.alert !== 'notset' && <div class="tryone-alert" data-aos-once="true" data-aos="fade-right" data-aos-duration="2000">
            <div className="fs-4">
                FastWords.com
            </div>
            <hr />
            <div>
            {props.alert}
            </div>
            <div>
                <button className="btn third mt-3" onClick={alertnull}>Ok</button>
            </div>
        </div>}
    </>

    )
}
