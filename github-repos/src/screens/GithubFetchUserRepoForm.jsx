import React, { PureComponent } from 'react';
import InputComponent from '../components/form-components/InputComponent';
import FormGroup from '../components/form-components/FormGroup'
class GithubFetchUserRepoForm extends PureComponent {
    
    state = { username:{attributeName:'username',value:null} , }
    handleChangeFunction = this.handleChangeFunction.bind(this);

    handleChangeFunction({ target:{ name, value } }){
        const { username } = this.state;
        if( username.attributeName === name ) {
            username.value = value;
            this.setState({username});
        }
    }
    render() {
        const { username } = this.state;
        return (<div>
            <FormGroup onChangeFunc={this.handleChangeFunction}>
                <InputComponent name={username.attributeName} id={username.attributeName}  />
            </FormGroup>
        </div>);
    }
}

export default GithubFetchUserRepoForm;
