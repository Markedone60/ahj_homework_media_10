export default function getGeo() {
  let location = '';
  const message = 'none';

  if (navigator.geolocation) {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        location = `${latitude}, ${longitude}`;
        resolve(location);
      }, (error) => {
        const message = 'none';
        console.log(error);
        resolve(message);
      });
    });
  }

  return message;
}