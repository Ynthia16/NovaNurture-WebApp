import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc
} from "firebase/firestore";
import { auth, firestoreDB } from "../FirebaseConfig";
import { updateEmail, verifyBeforeUpdateEmail } from "firebase/auth";

export const writeUserData = async (data) => {
  console.log(data);
  await addDoc(collection(firestoreDB, "users"), { ...data });
};

export const createPost = async (data) => {
  console.log(data);
  await addDoc(collection(firestoreDB, "posts"), { ...data });
};

export const readPosts = async () => {
  let posts = [];
  await getDocs(collection(firestoreDB, "posts"))
    .then((res) => {
      res.forEach((doc) => {
        posts.push({ ...doc.data() });
      });
    })
    .catch(() => {
      console.error("Error getting posts: ", error);
    });
  return posts;
};

export const editUser = async (id, currentUser, name, email) => {
  await verifyBeforeUpdateEmail(currentUser, email);
  await updateEmail(currentUser, email);
  await updateDoc(doc(firestoreDB, "users", id), { name: name, email: email });
  localStorage.setItem(
    "user",
    JSON.stringify({ id: id, name: name, email: email })
  );
};

export const readUsers = async () => {
  let arr = [];

  await getDocs(collection(firestoreDB, "users"))
    .then((res) => {
      res.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
    })
    .catch((error) => {
      console.error("Error getting users: ", error);
    });
  return arr;
};
