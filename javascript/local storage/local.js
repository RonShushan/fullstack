var users = []

if (localStorage.users) {
    users = JSON.parse(localStorage.users)
    onPrint()
}

function onSubmit() {
    var user = {
        task: taskDV.value,
        date: dateDV.value,
        time: timeDV.value,
    }

    if (!user.task || !user.date || !user.time) {
        printData.innerHTML += ''
    } else {
        users.push(user)
        localStorage.users = JSON.stringify(users)
        onPrint()
    }
}

function resetButton() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Reset Form?',
        text: "Are you sure?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Reset Form!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'The form is reset!',
                'Your form has been reset.',
                'success'
            )
            mainForm.reset()
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'The form does not reset',
                'error'
            )
        }
    })
}

function onPrint() {
    printData.innerHTML = ''
    var index = 1;

    for (var i = 0; i < users.length; i++) {
        printNote(users)
    }

    function printNote(user) {
        var user = users[i]

        var inputDate = new Date(user.date)
        var day = inputDate.getDate();
        var month = inputDate.getMonth() + 1;
        var year = inputDate.getFullYear();


        var userPrint = '';
        userPrint = `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-2">
        <div class="card" style='background-color: rgba(0,0,0,0.0);border: 0px solid gray;background-image: url("note.png"); width:200px; height:250px; margin-left:5%;-webkit-animation: fadein 0.5s;'>
        <button type="button" class="fa-solid fa-square-xmark" id="deleteBtn" onclick="removeItem(${i})"></button>
        <div class="card-body">
        <div class="card-title scroller" style="width:150px;height:90px;">${user.task}</div><br>
        <p class="card-text cardTitle"><strong>${day}.${month}.${year}<br>${user.time}</strong></p>
        </div>
        </div>
        </div>
        </div>
        `;
        printData.innerHTML += userPrint
        index++;
    }
}

function removeItem(index) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'delete task?',
        text: "Are you sure",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete task!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'task Deleted!',
                'Your task has been deleted.',
                'success'
            )
            users.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(users));
            onPrint()
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your task is safe ',
                'error'

            )
            onPrint()
        }
    })

}