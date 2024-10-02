const { EntitySchema } = require("typeorm");

const RegisteredUserDetails = new EntitySchema({
    name: "RegisteredUserDetails", // Entity name
    tableName: "registered_user_details",  // Your table name
    columns: {
        attendeeId: {
            primary: true,
            type: "varchar",
            generated: false
        },
        attendeeName: {
            type: "varchar",
        },
        attendeeEmail: {
            type: "varchar",
        },
        eventName: {
            type: "varchar",
        },
    },
});

module.exports = RegisteredUserDetails;  
