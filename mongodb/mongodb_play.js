use zoo;

const id = ObjectId("60a2766467f3a7df3811f092");

db.animals.findOne({_id: id});

db.animals.updateOne(
    {_id: id}, 
    {$set: {name: "Notalion"}}
    )

db.animals.deleteOne(
    {_id: id}
)