import {Workout, Set} from "../../typings/DataModel";


const backendUrl = "/server";

export async function fetchAllWorkouts(): Promise<Workout[]| undefined> {

    const response = await fetch(`${backendUrl}/workouts`);
    console.dir (response);

    if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return undefined;
    }

    const record = await response.json();
    console.dir (record);
    if (!record) {
        return []
    }

    return record;
}

export async function fetchWorkout(id:string): Promise<Workout| undefined> {

    const response = await fetch(`${backendUrl}/workout/${id}`);
    console.dir (response);

    if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return undefined;
    }

    const record = await response.json();
    if (!record) {
        window.alert(`Record with id ${id} not found`);
        return undefined;
    }

    return record;
}

export async function fetchSet(id:string): Promise<Set| undefined> {

    const response = await fetch(`${backendUrl}/set/${id}`);
    console.dir (response);

    if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return undefined;
    }

    const record = await response.json();
    if (!record) {
        window.alert(`Record with id ${id} not found`);
        return undefined;
    }

    return record;
}

export async function fetchSetsFromWorkout(id:string): Promise<Set[]| undefined> {

    const response = await fetch(`${backendUrl}/workout/${id}/sets`);
    console.dir (response);

    if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return undefined;
    }

    const sets = await response.json();
    return sets;
}

export async function updateWorkout(workout:Workout): Promise<Response> {
    const response = await fetch(`${backendUrl}/workout/update/${workout._id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({workout}),
    });
    console.dir (response);

    if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
    }

    return response;
}

export async function updateSet(set:Set): Promise<Response> {
    const response = await fetch(`${backendUrl}/set/update/${set._id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({set}),
    });
    console.dir (response);

    if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
    }

    return response;
}

export async function createWorkout(workout:Workout): Promise<Response> {
    const response = await fetch(`${backendUrl}/workout/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(workout),
    });
    console.dir (response);

    if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
    }

    return response;
}

export async function createSet(set:Set): Promise<Response> {
    const response = await fetch(`${backendUrl}/set/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(set),
    });
    console.dir (response);

    if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
    }

    return response;
}

export async function deleteRecord(id:string): Promise<Response> {
    const response = await fetch(`${backendUrl}/${id}`, {
        method: 'DELETE',
    });
    console.dir (response);

    if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
    }

    return response;
}

export async function deleteAllRecords(): Promise<Response> {
    const response = await fetch(`${backendUrl}/records/deleteAll`, {
        method: 'DELETE',
    });
    console.dir (response);

    if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
    }

    if (response.ok) {
        const record = await response.json();
        const message = `${record.deletedCount} record(s) deleted`;
        window.alert(message);
    }

    return response;
}