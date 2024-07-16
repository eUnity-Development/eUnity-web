import { Component, onMount } from "solid-js";

const Toast: Component<{
  position: { top: number; left: number };
  message: string;
  duration: number;
  id : string;
}> = (props) => {
  const { top, left } = props.position;


  return (
    <div
      id={props.id}
      class="absolute bg-white shadow-md rounded p-3 text-center w-48"
      style={`
        top: ${top}px; 
        left: ${left}px; 
        transition: all 0.5s ease-in-out; 
        opacity: 0;`}
    >
      <p class="text-sm font-medium text-gray-800">Copied to Clipboard</p>
    </div>
  );
};

export default Toast;
