import React from "react";

const Landing = () => {
  return (
    <div class="overflow-x-hidden bg-gray-50">
      <header class="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center">
        <a
          href="#"
          class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black"
        >
          <span class="mr-2 text-4xl text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z"
              />
            </svg>
          </span>
          streamio
        </a>
        <input type="checkbox" class="peer hidden" id="navbar-open" />
        <label
          class="absolute top-5 right-7 cursor-pointer md:hidden"
          for="navbar-open"
        >
          <span class="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li class="md:mr-12">
              <a href="#">Pricing</a>
            </li>
            <li class="md:mr-12">
              <a href="#">Features</a>
            </li>
            <li class="md:mr-12">
              <a href="#">Support</a>
            </li>
            <li class="md:mr-12">
              <button class="rounded-full border-2 border-blue-900 px-6 py-1 text-blue-900 transition-colors hover:bg-blue-500 hover:text-white">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <div class="relative flex flex-col justify-center mx-auto max-w-screen-xl py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div class="relative px-4 sm:px-6 lg:px-8">
          <div class="">
            <h1 class="mt-5 inline max-w-sm text-3xl font-bold leading-snug text-gray-900 sm:text-6xl sm:leading-snug lg:text-7xl lg:leading-snug">
              A marketplace for hostile <br class="hidden sm:block" />
              <span class="text-blue-600"> takeovers</span>
            </h1>
            <p class="inline-block max-w-2xl text-base leading-7 text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              laboriosam quibusdam quae suscipit voluptatum ex ut et natus
              deserunt similique, dicta saepe, adipisci inventore impedit!
            </p>

            <div class="group relative mt-10 flex">
              <div class="transitiona-all animate-tilt absolute -inset-1 rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
              <a
                href="#"
                title=""
                class="rounded-xl bg-blue-700 px-10 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600"
              >
                Get free trial
              </a>
              <div class="-scale-x-100 absolute left-0 -bottom-10 hidden h-10 w-10 -rotate-12 text-blue-600 md:inline-flex">
                <svg
                  viewBox="0 0 82 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32301 12.6326 1.24839 12.1517C1.43863 12.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41312 13.8814C11.09 14.3423 12.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7305C13.6228 17.8077 13.2227 18.01 12.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46612 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.33086 22.7891 3.36905 23.509 3.35123 24.2197C3.34977 24.2791 3.44107 24.3474 3.43052 24.3989C3.32213 24.9318 3.2712 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0129 0 21.3963Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.9279 29.9296C33.9687 30.0252 34.0103 30.1211 34.0512 30.2167L36.776 28.708C36.7189 28.6018 36.6613 28.4961 36.6041 28.3903C35.7123 28.9033 34.8197 29.4166 33.9279 29.9296ZM55.213 27.9357C55.2513 28.0076 55.2895 28.0795 55.3278 28.1513C56.8382 27.5018 58.3486 26.8518 59.8593 26.2019C59.8129 26.092 59.7661 25.9821 59.7197 25.8726C58.2175 26.5602 56.7153 27.2481 55.213 27.9357ZM40.7384 18.9565C40.5279 17.8215 40.3393 16.6815 40.0998 15.5525C39.952 14.8551 39.5106 14.6711 38.8099 14.825C36.6153 15.3082 34.9909 17.2686 34.7963 19.6189C34.584 22.1806 36.0472 23.7605 37.8517 25.1395C37.9927 25.2475 38.5155 25.0604 38.6986 24.8591C40.2045 23.1998 40.6396 21.163 40.7384 18.9565ZM47.8846 27.7513C53.9169 27.9699 58.9887 25.6539 63.5351 21.8258C68.7108 17.4677 72.7252 12.1435 76.2413 6.39113C77.3061 4.64903 78.3271 2.87833 79.4328 1.16371C79.7291 0.70344 80.2137 0.234515 80.706 0.0824723C81.0457 -0.0225277 81.5473 0.410268 81.9765 0.603333C81.8444 0.859247 81.7237 1.12306 81.5774 1.37032C81.1827 2.03645 80.7194 2.66758 80.3867 3.36306C79.3033 5.6264 78.3041 7.93113 77.1981 10.1824C76.4525 11.6998 75.639 13.1905 74.7457 14.6225C74.1814 15.5269 73.3694 16.269 72.7471 17.1414C71.7606 18.5237 70.9604 20.0611 69.8622 21.3395C68.1531 23.33 66.4111 25.3434 64.4139 27.0174C59.9989 30.718 54.9038 32.5263 49.0801 32.1605C46.3701 31.9904 43.6835 31.9283 41.122 30.8655C40.842 30.7492 40.3185 30.9333 40.0448 31.1527C37.2899 33.3656 34.1239 34.5277 30.6632 34.7456C28.0734 34.909 25.4198 35.1171 22.8828 34.7219C20.7546 34.3908 18.675 33.3742 16.7198 32.3694C14.9819 31.4756 13.3686 30.2773 11.8348 29.0418C9.65017 27.2812 8.09522 24.9795 7.06601 22.3556C6.91824 21.9789 7.17257 21.2819 7.46774 20.9267C7.79559 20.5315 8.26675 20.7212 8.80326 20.9647C10.4826 21.7271 11.1635 23.3172 12.0776 24.6916C13.809 27.2959 16.297 28.8333 19.144 29.6515C24.0015 31.0477 28.8342 30.4606 33.5239 28.7422C36.0572 27.8134 36.0323 27.708 34.1863 25.8643C31.7566 23.438 30.4122 20.5417 30.5982 17.0518C30.8143 13.0012 34.1347 10.1538 38.1338 10.4515C39.3892 10.5452 40.2439 11.3239 41.0648 12.1255C42.9294 13.9466 43.9712 16.2194 44.3347 18.7977C44.7112 21.4648 44.7806 24.1113 43.5286 26.6189C43.2264 27.2244 43.5171 27.489 44.1483 27.5187C45.3947 27.5778 46.6393 27.6719 47.8846 27.7513Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 mb-16 flex flex-col items-center justify-center divide-y divide-gray-200 border bg-white shadow-sm sm:flex-row sm:divide-x sm:divide-y-0 md:mt-32">
          <div class="flex max-w-xs items-center space-x-2 px-4 py-4 text-sm font-medium text-gray-600">
            <svg
              class="h-12 w-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="rgb(37 99 235)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.00001 0.769043C6.26017 0.769043 5.52453 0.864057 4.83158 1.06063"
              ></path>
              <path
                stroke="rgb(37 99 235)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M0.75001 13.2307V6.49181C0.75001 4.84532 1.27674 3.58257 2.11801 2.66748"
              ></path>
              <path
                stroke="rgb(37 99 235)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.25 13.2308V7.57227"
              ></path>
              <path
                stroke="rgb(37 99 235)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 0.769043C9.68738 0.769043 12.3194 2.02268 13.0506 4.8437"
              ></path>
              <path
                stroke="rgb(37 99 235)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.34512 13.231C4.34512 13.231 4.01 12.175 3.75866 10.6465"
              ></path>
              <path
                stroke="rgb(37 99 235)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.65489 13.231C9.65489 13.231 10.5128 10.5275 10.5128 7.51072C10.5128 6.9208 10.4366 6.41965 10.3027 5.99512"
              ></path>
              <path
                stroke="rgb(37 99 235)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 11.4219V12.4219"
              ></path>
              <path
                stroke="rgb(37 99 235)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.48719 7.51072C3.48719 4.49393 5.47919 3.79883 7.00001 3.79883C7.45091 3.79883 7.94324 3.85993 8.41278 4.02453"
              ></path>
              <path
                stroke="rgb(37 99 235)"
                stroke-linecap="round"
                d="M5.82499 8.51465C5.82499 7.57669 6.35106 7.06632 7 7.06632C7.64895 7.06632 8.17502 7.57669 8.17502 8.51465"
              ></path>
            </svg>
            <p>Complete Access</p>
          </div>
          <div class="flex max-w-xs items-center space-x-2 px-4 py-4 text-sm font-medium text-gray-600">
            <svg
              class="h-12 w-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                fill="#D7E0FF"
                stroke="rgb(37 99 235)"
                d="M1.88762 10.6061C2.05024 12.0408 3.26347 13.1594 4.70643 13.2106C5.43839 13.2366 6.18998 13.25 7.00002 13.25C7.81007 13.25 8.56165 13.2366 9.29361 13.2106C10.7366 13.1594 11.9498 12.0408 12.1124 10.6061C12.1691 10.1061 12.2084 9.59799 12.2084 9.08335C12.2084 8.56872 12.1691 8.06065 12.1124 7.56059C11.9498 6.1259 10.7366 5.00729 9.29361 4.95608C8.56165 4.93011 7.81007 4.91669 7.00002 4.91669C6.18998 4.91669 5.43839 4.93011 4.70643 4.95608C3.26346 5.00729 2.05024 6.1259 1.88762 7.56059C1.83093 8.06065 1.79169 8.56872 1.79169 9.08335C1.79169 9.59799 1.83093 10.1061 1.88762 10.6061Z"
              ></path>
              <path
                stroke="rgb(37 99 235)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.91665 4.91667V3.66667C9.91665 2.89312 9.60936 2.15125 9.06237 1.60427C8.51539 1.05729 7.77353 0.75 6.99998 0.75C6.22643 0.75 5.48457 1.05729 4.93759 1.60427C4.3906 2.15125 4.08331 2.89312 4.08331 3.66667V4.91667"
              ></path>
              <path
                stroke="rgb(37 99 235)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 8.50006L7 9.5"
              ></path>
            </svg>
            <p>Secured Protection</p>
          </div>
          <div class="flex max-w-xs items-center space-x-2 px-4 py-4 text-sm font-medium text-gray-600">
            <svg
              class="h-12 w-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                fill="#D7E0FF"
                stroke="rgb(37 99 235)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M0.796814 6.74899C0.796814 3.05244 2.34761 1.4682 2.86454 0.940125H11.1355C11.6524 1.4682 13.2032 3.05244 13.2032 6.74899C13.2032 10.9736 9.13011 12.5318 7.06238 13.0599C4.99465 12.5318 0.796814 10.9736 0.796814 6.74899Z"
              ></path>
              <path
                fill="#ffffff"
                stroke="rgb(37 99 235)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.00004 7.78243C8.15243 7.78243 9.08663 6.84823 9.08663 5.69584C9.08663 4.54345 8.15243 3.60925 7.00004 3.60925C5.84765 3.60925 4.91345 4.54345 4.91345 5.69584C4.91345 6.84823 5.84765 7.78243 7.00004 7.78243Z"
              ></path>
              <path
                fill="#ffffff"
                stroke="rgb(37 99 235)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.4848 11.5944C9.30446 12.3843 7.98414 12.8244 7.06236 13.0598C6.12771 12.8211 4.75784 12.3719 3.53717 11.5612C3.7638 11.2242 4.03998 10.9198 4.35893 10.6591C5.10426 10.0499 6.03728 9.7171 6.99991 9.7171C7.96253 9.7171 8.89556 10.0499 9.64089 10.6591C9.9703 10.9283 10.2541 11.2443 10.4848 11.5944Z"
              ></path>
            </svg>
            <p>User Management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
