const workoutCreation = (e, workouts, type) => {
    const exercises = Object.fromEntries(new FormData(e.target));
    const currentUserName = JSON.parse(localStorage.getItem('auth')).username;

    try {
        if (Object.values(exercises).includes('none')) {
            throw new Error('All exercises must be selected');
        }

        if (workouts.some(x => x.ownerName === currentUserName)) {
            throw new Error('You must delete your previous workout before creating a new one, otherwise you can only watch the videos');
        }

        const workoutData = {
            type,
            exercises
        };

        return workoutData;
    } catch (err) {
       return err.message;
    }
};

export default workoutCreation;