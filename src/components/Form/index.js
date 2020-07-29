import React from "react"

const Form = props =>
    <div className="row">
        <div className="col-lg-12 mb-4">
            <div className="card card-small mb-4">
                <div className="card-header border-bottom">
                    <h6 className="m-0">Form Inputs</h6>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item p-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <strong className="text-muted d-block mb-2">Forms</strong>
                                <form>
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">@</span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" value="myCoolPassword" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value="7898 Kensington Junction, New York, USA" />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-7">
                                            <input type="text" className="form-control" id="inputCity" value="New York" />
                                        </div>
                                        <div className="form-group col-md-5">
                                            <select id="inputState" className="form-control">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <strong className="text-muted d-block mb-2">Form Validation</strong>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name"
                                                value="Catalin" required />
                                            <div className="valid-feedback">The first name looks good!</div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name"
                                                value="Vasile" required />
                                            <div className="valid-feedback">The last name looks good!</div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control is-invalid" id="validationServer03" placeholder="Username"
                                            value="catalin.vasile" required />
                                        <div className="invalid-feedback">This username is taken.</div>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control is-invalid">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                        <div className="invalid-feedback">Please select your state.</div>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </li>

                    <li class="list-group-item p-0 px-3 pt-3">
                        <div class="row">
                            <div class="col-sm-12 col-md-4 mb-3">
                                <strong class="text-muted d-block mb-2">Checkboxes</strong>
                                <fieldset>
                                    <div class="custom-control custom-checkbox mb-1">
                                        <input type="checkbox" class="custom-control-input" id="formsCheckboxDefault" />
                                        <label class="custom-control-label" for="formsCheckboxDefault">Default</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-1">
                                        <input type="checkbox" class="custom-control-input" id="formsCheckboxChecked" checked />
                                        <label class="custom-control-label" for="formsCheckboxChecked">Checked</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-1">
                                        <input type="checkbox" class="custom-control-input" id="formsCheckboxDisabled" disabled />
                                        <label class="custom-control-label" for="formsCheckboxDisabled">Disabled</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-1">
                                        <input type="checkbox" class="custom-control-input" id="formsCheckboxDisabledChecked" disabled
                                            checked />
                                        <label class="custom-control-label" for="formsCheckboxDisabledChecked">Disabled Checked</label>
                                    </div>
                                </fieldset>
                            </div>
                            <div class="col-sm-12 col-md-4 mb-3">
                                <strong class="text-muted d-block mb-2">Radio Buttons</strong>
                                <fieldset>
                                    <div class="custom-control custom-radio mb-1">
                                        <input type="radio" id="formsRadioDefault" name="formsRadioDefault" class="custom-control-input" />
                                        <label class="custom-control-label" for="formsRadioDefault">Default</label>
                                    </div>
                                    <div class="custom-control custom-radio mb-1">
                                        <input type="radio" id="formsRadioChecked" name="formsRadioChecked" class="custom-control-input"
                                            checked />
                                        <label class="custom-control-label" for="formsRadioChecked">Checked</label>
                                    </div>
                                    <div class="custom-control custom-radio mb-1">
                                        <input type="radio" id="formsRadioDisabled" name="formsRadioDisabled" class="custom-control-input"
                                            disabled />
                                        <label class="custom-control-label" for="formsRadioDisabled">Disabled</label>
                                    </div>
                                    <div class="custom-control custom-radio mb-1">
                                        <input type="radio" id="formsRadioDisabledChecked" name="formsRadioDisabledChecked"
                                            class="custom-control-input" disabled checked />
                                        <label class="custom-control-label" for="formsRadioDisabledChecked">Disabled Checked</label>
                                    </div>
                                </fieldset>
                            </div>
                            <div class="col-sm-12 col-md-4 mb-3">
                                <fieldset>
                                    <strong class="text-muted d-block mb-2">Toggle Switches</strong>
                                    <div class="custom-control custom-toggle custom-toggle-sm mb-1">
                                        <input type="checkbox" id="customToggle1" name="customToggle1" class="custom-control-input" />
                                        <label class="custom-control-label" for="customToggle1">Default</label>
                                    </div>
                                    <div class="custom-control custom-toggle custom-toggle-sm mb-1">
                                        <input type="checkbox" id="customToggle2" name="customToggle2" class="custom-control-input"
                                            checked="checked" />
                                        <label class="custom-control-label" for="customToggle2">Checked</label>
                                    </div>
                                    <div class="custom-control custom-toggle custom-toggle-sm mb-1">
                                        <input type="checkbox" id="customToggle3" name="customToggle3" class="custom-control-input"
                                            disabled="disabled" />
                                        <label class="custom-control-label" for="customToggle3">Disabled</label>
                                    </div>
                                    <div class="custom-control custom-toggle custom-toggle-sm mb-1">
                                        <input type="checkbox" id="customToggle4" name="customToggle4" class="custom-control-input"
                                            checked="checked" disabled="disabled" />
                                        <label class="custom-control-label" for="customToggle4">Disabled Checked</label>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item p-0 px-3 pt-3">
                        <div class="row">
                            <div class="col-sm-2 col-md-4 mb-3">
                                <input type="submit" value="Enviar Formulário" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>


export default Form