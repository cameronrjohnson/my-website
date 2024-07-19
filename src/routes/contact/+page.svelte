<script lang="ts">
  import { supabase } from "../../supabaseCliet";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  import { TextInput, TextArea, Form } from "carbon-components-svelte";

  // Validation schema for the form
  const validationSchema = yup.object().shape({
      name: yup.string().required('Enter a name'),
      email: yup.string().email().required('Enter a valid email'),
      message: yup.string().required('Enter a message')
  });

  type FormValues = {
      name: string;
      email: string;
      message: string;
  };

  let apiResult: boolean | null = null;
  let apiError: string = "";

  // Create form with validation and submit handling
  const { form, errors, handleChange, handleSubmit, isSubmitting, handleReset } = createForm<FormValues>({
      initialValues: { name: "", email: "", message: "" },
      validationSchema: validationSchema,
      onSubmit: async values => {
          try {
              const { data, error } = await supabase.from("contact").insert(values);

              if (error) {
                  console.error("Supabase error:", error);
                  apiError = error.message ?? "An unknown error occurred.";
                  apiResult = false;
              } else {
                  console.log("Supabase response data:", data);
                  apiResult = true;
              }
          } catch (ex) {
              console.error("Caught exception:", ex);
              apiError = ex instanceof Error ? ex.message : "An unknown error occurred.";
              apiResult = false;
          }
          handleReset();
      }
  });

  // Reactive statement to handle alert messages
  $: {
      if (apiResult === true) {
          alert("Your message has been sent.");
          apiResult = null;  // Reset result after showing alert
      } else if (apiResult === false) {
          alert("There was an error. Please try again later.");
          apiResult = null;  // Reset result after showing alert
      }
  }
</script>

<style>
  .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh;
      background-color: hsl(0, 0%, 30%);
  }

  .content {
      padding: 30px;
      background-color: #eff0d1;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      max-width: 800px;
      width: 100%;
      text-align: center;
  }

  .head {
      list-style: none;
      text-decoration: none;
      font-size: 1.2em;
      margin-bottom: 1rem;
  }

  .form-container {
      margin-top: 2rem;
  }

  .form-group {
      margin-bottom: 1rem;
  }

  .submit-button {
      padding: 10px 20px;
      color: black;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
  }

  .submit-button:hover {
      background-color: #262730;
      color: white;
  }

  .row {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
  }
</style>

<div class="container">
  <div class="content">
      <h1>Send Me An Email</h1>
      <p class="head">Please enter a message below and I will try to get back to you ASAP.</p>

      <div class="form-container">
          <Form on:submit={handleSubmit}>
              <div class="row">
                  <div class="form-group">
                      <TextInput 
                          labelText="Name" 
                          name="name" 
                          on:change={handleChange} 
                          bind:value={$form.name} 
                          invalid={$errors.name.length > 0} 
                          invalidText={$errors.name} 
                      />
                  </div>
                  <div class="form-group">
                      <TextInput 
                          labelText="Email" 
                          name="email" 
                          type="email" 
                          on:change={handleChange} 
                          bind:value={$form.email} 
                          invalid={$errors.email.length > 0} 
                          invalidText={$errors.email} 
                      />
                  </div>
              </div>
              <div class="form-group">
                  <TextArea 
                      labelText="Message" 
                      name="message" 
                      on:change={handleChange} 
                      bind:value={$form.message} 
                      invalid={$errors.message.length > 0} 
                      invalidText={$errors.message} 
                  />
              </div>
              <button class="submit-button" type="submit" disabled={$isSubmitting}>Submit</button>
          </Form>
      </div>
  </div>
</div>
