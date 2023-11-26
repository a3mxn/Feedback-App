import React from 'react'
import Card from '../Components/Shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is react app</p>
        <p>Versoin 1.0.1</p>
        <p>
          <a href="/">Back to Home</a>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
