// removePhoto
export function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index
  }
}

// payload to action
export function addPost(post) {
  return {
    type: 'ADD_POST',
    post
  }
}
