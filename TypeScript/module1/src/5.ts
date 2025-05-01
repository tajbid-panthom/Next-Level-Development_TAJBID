{//Referace Type -->Object

const user3 : {
    firstName: string,
    middleName: string,
    lastName?: string, //optional property
    company:"Programming Hero", //type --> literal types
    readonly id: number //readonly property
} = {
    firstName:"Tajbid",
    middleName:"Hossain",
    company:"Programming Hero",
    id: 1
};
// user3.id = 2; //error: Cannot assign to 'id' because it is a read-only property
//user3.company = "Programming Hero"; //error: Cannot assign to 'company' because it is a read-only property


}