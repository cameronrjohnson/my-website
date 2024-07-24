<script lang="ts">
    import { supabase } from "../../supabaseCliet"; // Corrected import
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
  
<div class="flex items-center justify-center h-[50vh] p-5">
    <div class="bg-yellow-100 p-8 shadow-md rounded-xl max-w-3xl w-full text-center">
        <h1 class="text-3xl font-bold text-black mb-4">Send Me An Email</h1>
        <p class="text-lg text-black mb-4">Please enter a message below and I will try to get back to you ASAP.</p>
  
        <Form on:submit={handleSubmit}>
            <div class="space-y-4">
                <div class="flex flex-row gap-4">
                    <div class="w-full sm:w-1/2">
                        <div class="mb-4">
                            <label for="name" class="block text-black text-sm font-medium mb-2">Name</label>
                            <TextInput 
                                id="name"
                                name="name" 
                                on:change={handleChange} 
                                bind:value={$form.name} 
                                class="w-full bg-yellow-100 border border-black rounded-md py-2 px-3 text-gray-700 text-black"
                            />
                            {#if $errors.name}
                                <div class="text-black text-sm mt-1">{$errors.name}</div> <!-- Custom error message -->
                            {/if}
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <div class="mb-4">
                            <label for="email" class="block text-black text-sm font-medium mb-2">Email</label>
                            <TextInput 
                                id="email"
                                name="email" 
                                type="email" 
                                on:change={handleChange} 
                                bind:value={$form.email} 
                                class="w-full bg-yellow-100 border border-black rounded-md py-2 px-3 text-gray-700"
                            />
                            {#if $errors.email}
                                <div class="text-black text-sm mt-1">{$errors.email}</div> <!-- Custom error message -->
                            {/if}
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-4">
                        <label for="message" class="block text-black text-sm font-medium mb-2">Message</label>
                        <TextArea 
                            id="message"
                            name="message" 
                            on:change={handleChange} 
                            bind:value={$form.message} 
                            class="w-full bg-yellow-100 border border-black rounded-md py-2 px-3 text-gray-700"
                        />
                        {#if $errors.message}
                            <div class="text-black text-sm mt-1">{$errors.message}</div> <!-- Custom error message -->
                        {/if}
                    </div>
                </div>
                <button 
                    type="submit" 
                    disabled={$isSubmitting} 
                    class="bg-gray-700 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-800 disabled:bg-blue-600 disabled:opacity-50"
                >
                    Submit
                </button>
            </div>
        </Form>
    </div>
</div>
