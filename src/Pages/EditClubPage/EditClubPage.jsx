<<<<<<< HEAD
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import EditClubForm from "../../components/EditClubForm/EditClubForm"
import { Col, Row } from "react-bootstrap"


function EditClubPage() {

    return (
        <div className="EditClubPage" >
            <Row>

                <Col md={{ span: 8, offset: 2 }}>
                    <h1 >Edit Club</h1>
                    <hr />
                    <EditClubForm />
                </Col>
            </Row>
        </div >
    )

}
=======
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import EditClubForm from "../../components/EditClubForm/EditClubForm"
import { CloseButton, Col, Row } from "react-bootstrap"


function EditClubPage() {

    return (
        <div className="EditClubPage" >
            <Row>

                <Col md={{ span: 8, offset: 2 }}>
                    <h1 >Edit Club</h1>
                    <CloseButton></CloseButton>
                    <hr />
                    <EditClubForm />
                </Col>
            </Row>
        </div >
    )

}
>>>>>>> ab3fc09f49b6530fb5b8952bf5b6ba7ebd968203
export default EditClubPage