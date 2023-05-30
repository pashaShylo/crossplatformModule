export default function calculateExp(date: Date) {
    const today = new Date();
    const diffInMilliseconds = Math.abs(today.getTime() - date.getTime());
    const Difference_In_Days = diffInMilliseconds / (1000 * 3600 * 24);

    return Difference_In_Days.toFixed();
}
