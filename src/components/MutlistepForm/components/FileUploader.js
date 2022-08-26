import { useState } from "react"
import { Container, Row, Col, Form, Button, ProgressBar } from "react-bootstrap"
import axiosInstance from "./axios"

function FileUploader() {
  const [selectedFiles, setSelectedFiles] = useState([])
  const [progress, setProgress] = useState()

  const submitHandler = e => {
    e.preventDefault() //prevent the form from submitting
    let formData = new FormData()

    formData.append("file", selectedFiles[0])
    axiosInstance.post("/upload_file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: data => {
        //Set the progress value to show the progress bar
        setProgress(Math.round((100 * data.loaded) / data.total))
      },
    })
  }
  return (
    <Container>
      <Row>
        <Col lg={{ span: 4, offset: 3 }}>
       
        </Col>
      </Row>
    </Container>
  )
}

export default FileUploader
