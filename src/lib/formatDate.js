export function formatDate(dateStr) {
    const date = new Date(dateStr);
    
    // Array of month names
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    
    // Formatting the date to "DD Month YYYY HH:mm:ss"
    const formattedDate = `${date.getDate().toString().padStart(2, '0')} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    
    return formattedDate
}