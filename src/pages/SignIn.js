import React from 'react'
import {
Button,
Form,
FormGroup,
Label,
Input} from 'reactstrap'

const SignIn = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label
            for="exampleEmail"
            hidden
          >
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="Email"
      type="email"
    />
  </FormGroup>
  {' '}
  <FormGroup>
    <Label
      for="examplePassword"
      hidden
    >
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="Password"
      type="password"
    />
  </FormGroup>
  <Button>
    Submit
  </Button>
</Form>
    </div>
  )
}

export default SignIn