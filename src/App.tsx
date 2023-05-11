import { Box, Button, Paper, Input } from "@suid/material";
import { green } from "@suid/material/colors";
import { createSignal } from "solid-js";

function App() {
  return (
    <CenteredBox>
      <div class="grid gap-4 w-full max-w-4xl h-full grid-cols-2/3 grid-rows-8/1 max-h-256">
        <ActionBox class="rounded-tl-xl rounded-br-xl"></ActionBox>

        <ActionBox class="flex flex-col gap-4 max-w-full rounded-tr-xl rounded-br-xl">
          <Message userType="recipient">
            Aliquam nec lobortis sapien. Mauris felis libero, egestas ut blandit
            non, pretium interdum nisl. Donec nec nulla quis enim sagittis
            tempus a ac lorem. Nulla facilisi. Ut imperdiet tellus at arcu
            rhoncus vestibulum non a libero. Donec vehicula enim vitae urna
            vehicula laoree
          </Message>
          <Message>Borrringgg!!</Message>
          <Message>Borrringgg Dude!!</Message>
        </ActionBox>

        <ActionBox class="rounded-bl-xl"></ActionBox>

        <ActionBox class="overflow-x-hidden overflow-y-scroll rounded-tl-xl rounded-br-xl">
          <form onSubmit={(data) => console.log(data)} class="h-full">
            <textarea
              onKeyPress={(e) => {
                if (e.ke === 13 && !e.shiftKey) {
                  e.preventDefault();
                }
              }}
              name="userInput"
              id="userInput"
              placeholder="Ask it a question?"
              class="block w-full h-full outline-none resize-none"
            ></textarea>
            <input type="submit" value="" />
          </form>
        </ActionBox>
      </div>
    </CenteredBox>
  );
}

function Message(props) {
  return (
    <div
      class={`flex w-fit rounded-3xl ${
        props.userType === "recipient"
          ? "bg-indigo-800 mr-auto"
          : "bg-green-600 ml-auto"
      } relative ${props.class ?? ""}`}
    >
      <small class="gray-900"></small>

      <div class="block relative px-6 py-5 text-white whitespace-normal break-words">
        {props.children}
      </div>
    </div>
  );
}

function CenteredBox(props) {
  return (
    <div class="flex justify-center items-center p-8 w-screen h-screen m2">
      {props.children}
    </div>
  );
}

function ActionBox(props: any) {
  return (
    <div
      class={`block relative p-4 h-full w-full border-2 border-gray-500 ${
        props.class ?? ""
      }`}
    >
      {props.children}
    </div>
  );
}

export default App;
