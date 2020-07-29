import React from "react"

import PageHeader from '../PageHeader'
import Form from '../Form'

const ContentForm = props =>
    <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
        <div class="main-content-container container-fluid px-4">
            <PageHeader />
            <Form />
        </div>
    </main>

export default ContentForm