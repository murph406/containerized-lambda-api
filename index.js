
exports.handler = async (event, context) => {
    const message = "🔥🔥🔥🔥🔥🔥"

    console.log("\nEVENT::", event, '\n');
    console.log("\nCONTEXT::", context, '\n');

    return {
        statusCode: 200,
        body: JSON.stringify({ message }),
        headers: {
            "content-type": "application/json"
        }
    }
}
