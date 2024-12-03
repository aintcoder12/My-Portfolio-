

// progress bar

// Optionally, you can use JavaScript to dynamically adjust the progress bars, for example:

setTimeout(() => {

    document.querySelectorAll('.progress-bar')[0].style.width = '90%';

    document.querySelectorAll('.progress-bar')[1].style.width = '55%';

    document.querySelectorAll('.progress-bar')[2].style.width = '65%';

    document.querySelectorAll('.progress-bar')[3].style.width = '75%';

}, 2000); // Change progress after 2 seconds for demonstration



//contact



function handleSubmit(event) {

            event.preventDefault(); // Prevent the form from submitting the traditional way



            // Get form values

            const name = document.getElementById('name').value;

            const email = document.getElementById('email').value;

            const message = document.getElementById('message').value;



            // Display an alert with the submitted information

            alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);



            // Optionally, you can clear the form after submission

            document.getElementById('contactForm').reset();

        }

