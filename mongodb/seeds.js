use zoo;

db.dropDatabase();

db.animals.insertMany(
    [
        {
            name: "Alion",
            type: "Lion"
        },
        {
            name: "Flipper",
            type: "Penguin",
            fur: "smooth"
        },
        {
            name: "Doug",
            type: "Dog",
            age: "4"
        }
    ]
)