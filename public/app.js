const personlist = document.querySelector('#Person-list');
const form = document.querySelector("#addperson");
// create element & render People
function renderPerson(doc){
    let li = document.createElement('li');
    let Name = document.createElement('span');
    let Age = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    Name.textContent = doc.data().Name;
    Age.textContent = doc.data().Age;

    li.appendChild(Name);
    li.appendChild(Age);

    personlist.appendChild(li);
}

// getting data
db.collection('Person').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderPerson(doc);
    });
})
//saving data

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Person').add({
        Name: form.Name.value,
        Age: form.Age.value
    });
    form.Name.value = '';
    form.Age.value = '';
});
 

