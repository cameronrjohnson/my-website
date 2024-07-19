<!-- src/routes/Contact.svelte -->
<script lang="ts">
    import { supabase } from "../../supabaseCliet";
    import { createForm } from "svelte-forms-lib";
    import * as yup from "yup";
  
    import { TextInput, TextArea, Button, FormGroup, Form, InlineNotification } from "carbon-components-svelte";
  
    const validationSchema = yup.object().shape({
      name: yup.string().required('Please enter a name'),
      email: yup.string().email().required('Please enter a valid email'),
      message: yup.string().required('Please enter a message')
    });
  
    type FormValues = {
      name: string;
      email: string;
      message: string;
    };
  
    let apiResult: boolean | null = null;
    let apiError: string = "";
  
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
          if (ex instanceof Error) {
            apiError = ex.message ?? "An unknown error occurred.";
          } else {
            apiError = "An unknown error occurred.";
          }
          apiResult = false;
        }
  
        handleReset();
      }
    });
  </script>
  
  <style>
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80vh;
      padding: 20px;
      background-color: hsl(0, 0, 30%);
    }
  
    .content {
      background-color: #EFF0D1;
      padding: 2rem;
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
  </style>
  
  <div class="container">
    <div class="content">
      <h1>Send Me An Email</h1>
      <p class="head">Please enter your info and message below and I will try to get back to you asap.</p>
  
      {#if apiResult !== null}
        {#if apiResult === true}
          <InlineNotification
            lowContrast
            kind="success"
            title="Success:"
            subtitle="Your message has been received"
            class="notification"
          />
        {:else}
          <InlineNotification
            lowContrast
            kind="error"
            title="Error:"
            subtitle="{apiError}"
            class="notification"
          />
        {/if}
      {/if}
  
      <div class="form-container">
        <Form on:submit={handleSubmit}>
          <div class="form-group">
            <TextInput labelText="Name" name="name" on:change={handleChange} bind:value={$form.name} invalid={$errors.name.length > 0} invalidText={$errors.name}/>
          </div>
          <div class="form-group">
            <TextInput labelText="Email" name="email" type="email" on:change={handleChange} bind:value={$form.email} invalid={$errors.email.length > 0} invalidText={$errors.email}/>
          </div>
          <div class="form-group">
            <TextArea labelText="Message" name="message" typeof="textarea" on:change={handleChange} bind:value={$form.message} invalid={$errors.message.length > 0} invalidText={$errors.message}/>
          </div>
          <button class="submit-button" type="submit" disabled={$isSubmitting}>Submit</button>
        </Form>
      </div>
  
    </div>
  </div>
  