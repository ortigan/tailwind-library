<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4 mb-12">
          <Heading
            ><template>
              Avatar
            </template>
          </Heading>
          <div>
            <p class="text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Default avatar</template
            >
          </SubHeading>
          <div class="pb-4">
            <p>In the fifth component <a href="https://avatars.dicebear.com/"> DiceBear avatars </a> are used</p>
          </div>
          <ComponentPad>
            <template>
              <DefaultAvatar />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <!-- Letter -->
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <div class="text-base font-medium text-gray-700">P</div>
          </div>
          <!-- Text -->
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <div class="text-sm font-light tracking-tight text-gray-700">John</div>
          </div>
          <!-- Initials -->
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <div class="text-base font-normal text-gray-700">JD</div>
          </div>
          <!-- Icon -->
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <svg class="text-gray-700" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
          <!-- Avatar -->
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-300 hover:bg-sky-200">
            <img class="h-full w-full rounded-lg object-cover pt-2" src="https://avatars.dicebear.com/api/avataaars/prapr.more2.svg" alt="" />
          </div>
          <!-- Image -->
           <div class="h-10 w-10">
              <img class="h-full w-full rounded-lg object-cover" src="...." alt="" />
          </div>
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end default avatar -->
          <!-- Default Sizes -->
          <SubHeading>
            <template v-slot:subHeader
              >Avatar sizes</template
            >
          </SubHeading>
          <div class="pb-4">
            <p>Use height and width classes from <a href="https://tailwindcss.com/" class="text-sky-700">tailwindcss</a> for variable size components</p>
          </div>
          <ComponentPad>
            <template>
              <SizeAvatar />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <!-- Letter -->
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <div class="text-base font-medium text-gray-700">P</div>
          </div>
          <!-- Text -->
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <div class="text-sm font-light tracking-tight text-gray-700">John</div>
          </div>
          <!-- Initials -->
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <div class="text-base font-normal text-gray-700">JD</div>
          </div>
          <!-- Icon -->
          <div class="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <svg class="text-gray-700" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
          <!-- Avatar -->
          <div class="flex h-16 w-16 items-center justify-center rounded-lg bg-sky-300 hover:bg-sky-200">
            <img class="h-full w-full rounded-lg object-cover pt-2" src="https://avatars.dicebear.com/api/avataaars/prapr.more2.svg" alt="" />
          </div>
          <!-- Image -->
           <div class="h-20 w-20">
              <img class="h-full w-full rounded-lg object-cover" src="...." alt="" />
          </div>
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end  avatar sizes -->
          <!-- Presence avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Avatar with presence indicator</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <PresenceAvatar />
            </template>
          </ComponentPad>
               <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <!-- Letter -->
          <div class="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <div class="text-base font-medium text-gray-700">P</div>
            <div class="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-400"></div>
          </div>
          <!-- Text -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <div class="text-sm font-light tracking-tight text-gray-700">John</div>
            <div class="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-red-400"></div>
          </div>
          <!-- Initials -->
          <div class="relative flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <div class="text-base font-normal text-gray-700">JD</div>
            <div class="absolute -right-1 -bottom-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-blue-400"></div>
          </div>
          <!-- Icon -->
          <div class="relative flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <svg class="text-gray-700" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="absolute -right-1 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-purple-400"></div>
          </div>
          <!-- Avatar -->
          <div class="relative flex h-16 w-16 items-center justify-center rounded-lg bg-teal-300 hover:bg-teal-200">
            <img class="h-full w-full rounded-lg object-cover pt-1" src="https://avatars.dicebear.com/api/avataaars/mv.m55re2.svg" alt="" />
            <div class="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white bg-green-400"></div>
          </div>
          <!-- image -->
          <div class="relative h-20 w-20">
            <img class="h-full w-full rounded-2xl object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651817214/Tailwind-Component-library/Human%20avatar/pexels-dalila-dalprat-1844547_zltpkb.jpg" alt="" />
            <div class="absolute -right-2 -top-2 h-5 w-5 rounded-full border-2 border-white bg-sky-400"></div>
          </div>
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end presence avatar -->
          <!-- Circle avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Circle</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <CircleAvatar />
            </template>
          </ComponentPad>
               <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <!-- Letter -->
          <div class="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
            <div class="text-base font-medium text-gray-700">P</div>
            <div class="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-400"></div>
          </div>
          <!-- Text -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-800">
            <div class="text-sm font-normal tracking-tight text-gray-100">John</div>
          </div>
          <!-- Initials -->
          <div class="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gray-100 ring-2 ring-indigo-400 hover:bg-gray-200">
            <div class="text-base font-normal text-gray-700">JD</div>
          </div>
          <!-- Icon -->
          <div class="relative flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
            <svg class="text-gray-700" width="30" height="30" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-purple-400"></div>
          </div>
          <!-- Avatar -->
          <div class="relative flex h-16 w-16 items-center justify-center rounded-full bg-indigo-300 hover:bg-indigo-200">
            <img class="h-full w-full rounded-full object-cover pt-1" src="https://avatars.dicebear.com/api/micah/mvem55re2.svg" alt="" />
            <div class="absolute -right-0 -top-0 h-4 w-4 rounded-full border-2 border-white bg-yellow-400"></div>
          </div>
          <!-- image -->
          <div class="relative h-20 w-20 rounded-full">
            <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651820943/Tailwind-Component-library/Human%20avatar/pexels-sound-on-3760857_hujrch.jpg" alt="" />
            <div class="absolute -right-0 -top-0 h-5 w-5 rounded-full border-2 border-white bg-red-400"></div>
          </div>
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end Circle avatar -->
          <!-- Square avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Square</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <SquareAvatar />
            </template>
          </ComponentPad>
               <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <!-- Letter -->
          <div class="relative flex h-8 w-8 items-center justify-center bg-gray-100 hover:bg-gray-200">
            <div class="text-base font-medium text-gray-700">P</div>
            <div class="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-400"></div>
          </div>
          <!-- Text -->
          <div class="relative flex h-10 w-10 items-center justify-center bg-gray-700 hover:bg-gray-200">
            <div class="text-sm font-normal tracking-tight text-gray-100">John</div>
          </div>
          <!-- Initials -->
          <div class="relative flex h-12 w-12 items-center justify-center border-2 border-white bg-gray-100 ring-2 ring-indigo-400 hover:bg-gray-200">
            <div class="text-base font-normal text-gray-700">JD</div>
          </div>
          <!-- Icon -->
          <div class="relative flex h-14 w-14 items-center justify-center bg-gray-100 hover:bg-gray-200">
            <svg class="text-gray-700" width="30" height="30" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="absolute -right-1 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-purple-400"></div>
          </div>
          <!-- Avatar -->
          <div class="relative flex h-16 w-16 items-center justify-center bg-red-300 hover:bg-red-200">
            <img class="h-full w-full object-cover pt-1" src="https://avatars.dicebear.com/api/micah/yerm55re2.svg" alt="" />
            <div class="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white bg-green-400"></div>
          </div>
          <!-- Image -->
          <div class="relative h-20 w-20">
            <img class="h-full w-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651821859/Tailwind-Component-library/Human%20avatar/pexels-pixabay-220453_ndnfc1.jpg" alt="" />
            <div class="absolute -right-1 -top-1 h-5 w-5 rounded-full border-2 border-white bg-red-400"></div>
          </div>
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end Square avatar -->
          <!-- PresenceRing avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Avatar with presence Ring</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <PresenceRingAvatar />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <!-- Letter -->
          <div class="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-2 ring-green-300 hover:bg-gray-200">
            <div class="text-base font-medium text-gray-700">P</div>
          </div>
          <!-- Text -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 ring-2 ring-red-300">
            <div class="text-sm font-light tracking-tight text-gray-700 hover:scale-105">Alen</div>
          </div>
          <!-- Initials -->
          <div class="relative flex h-12 w-12 items-center justify-center border bg-gray-700 ring-2 ring-sky-300 hover:bg-gray-800">
            <div class="text-base font-normal text-gray-100">JD</div>
          </div>
          <!-- Icon -->
          <div class="relative flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 ring-2 ring-indigo-400 hover:bg-gray-200">
            <svg class="text-gray-700" width="30" height="30" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="absolute -right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400"></div>
          </div>
          <!-- Avatar -->
          <div class="relative flex h-16 w-16 items-center justify-center rounded-lg bg-amber-300 ring-2 ring-blue-300">
            <img class="h-full w-full rounded-lg border-2 object-cover pt-2" src="https://avatars.dicebear.com/api/avataaars/pj9bbrv.more2.svg" alt="" />
          </div>
          <!-- Image -->
          <div class="relative h-20 w-20 rounded-full ring-2 ring-red-400">
            <img class="h-full w-full rounded-full border-2 object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651817165/Tailwind-Component-library/Human%20avatar/pexels-anastasia-shuraeva-5704720_lbcevs.jpg" alt="" />
          </div>
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end presence Ring avatar -->
          <!-- Color avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Color</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <ColorAvatar />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <!-- Letter -->
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700">
            <div class="text-base font-normal text-white">P</div>
          </div>
          <!-- Text -->
          <div class="flex h-10 w-10 items-center justify-center bg-fuchsia-600">
            <div class="text-base font-normal text-white">Km</div>
          </div>
          <!-- Intials -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-sky-400">
            <div class="text-base font-normal text-white">S</div>
            <div class="absolute -right-0 -top-0 h-3 w-3 rounded-full border-2 border-white bg-green-400"></div>
          </div>
          <!-- Icon -->
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400">
            <div class="text-base font-medium text-white">WK</div>
          </div>
          <!-- Avatar -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-teal-400 px-0.5">
            <div class="text-xs font-normal tracking-tighter text-white">ADAM</div>
            <div class="absolute -right-1 -bottom-1 h-3 w-3 rounded-full border-2 border-white bg-red-400"></div>
          </div>
          <!-- Image -->
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 px-0.5">
            <svg class="text-white" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
          </script></code></pre>
          <!-- code snippet end -->
          
          <!-- end Color avatar -->
          <!-- Badge avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Badge</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <BadgeAvatar />
            </template>
          </ComponentPad>
           <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <!-- Letter -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400">
            <div class="text-base font-medium text-gray-100">S</div>
            <div class="text-xxs absolute -right-2 -top-2 rounded-full border-2 border-white bg-cyan-600 px-1">3</div>
          </div>
          <!-- text -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <img class="h-full w-full rounded-lg object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651821816/Tailwind-Component-library/Human%20avatar/pexels-andrea-piacquadio-3767410_kur6zy.jpg" alt="" />
            <div class="text-xxs absolute -right-2 -bottom-2 rounded-full border border-white bg-violet-500 px-0.5 font-medium">+99</div>
          </div>
          <!-- Icon -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200">
            <svg class="text-blue-700" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
            <div class="absolute -right-1 -bottom-1 rounded-full border border-white bg-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg>
            </div>
          </div>
          <!-- Avatar -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-pink-300">
            <img class="h-9 w-9 rounded-full object-cover pt-1 hover:h-10 hover:w-10" src="https://avatars.dicebear.com/api/avataaars/aoiprapre2.svg" alt="" />
            <div class="absolute -right-1 -bottom-1 rounded-full border border-white bg-rose-500 p-0.5">
              <svg class="text-white" width="12" height="12" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.27049 6.5C6.09277 7.10971 6 7.74975 6 8.4C6 15.8667 3 18 3 18H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.75732 3.87452C8.88254 2.67428 10.4087 2 12 2C13.5913 2 15.1174 2.67428 16.2426 3.87452C17.3678 5.07475 18 6.70261 18 8.4C18 15.8667 21 18 21 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </div>
          </div>
          <!-- image -->
          <div class="relative h-10 w-10">
            <img class="h-full w-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651744687/Tailwind-Component-library/matheus-ferrero-W7b3eDUb_2I-unsplash_hu3utv.jpg" alt="" />
            <div class="text-xxs absolute -right-3 -top-2 rounded-full border border-white bg-gray-500 px-1 font-medium">Off</div>
          </div>
          <!-- text -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
            <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651818407/Tailwind-Component-library/Human%20avatar/pexels-italo-melo-2379004_nibpi3.jpg" alt="" />
            <div class="absolute -right-3 -top-2 text-xxs rounded-lg border border-white bg-green-500 px-0.5 font-medium tracking-tight">New</div>
          </div>
          <!-- Pen -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
            <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651818134/Tailwind-Component-library/Human%20avatar/pexels-rachel-claire-5490276_ahveoz.jpg" alt="" />
            <div class="text-xxs absolute -right-1 -bottom-1 rounded-full border border-white bg-cyan-500 p-0.5 font-medium tracking-tight">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
          </div>
          <!-- text -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <img class="h-full w-full rounded-lg object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651821859/Tailwind-Component-library/Human%20avatar/pexels-pixabay-220453_ndnfc1.jpg" alt="" />
            <div class="text-xxs absolute -right-2 -bottom-2 rounded-lg border-2 border-white bg-yellow-500 px-1 font-medium">16</div>
          </div>
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end Badge avatar -->
          <!-- Shadows avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Shadows</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <ShadowsAvatar />
            </template>
          </ComponentPad>
            <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <!-- Icon -->
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-white px-0.5 shadow-lg shadow-gray-300 hover:shadow-none">
            <svg class="text-gray-700" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <!-- Image -->
          <div class="relative h-10 w-10 rounded-full shadow-lg shadow-gray-400 hover:shadow-none">
            <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651820943/Tailwind-Component-library/Human%20avatar/pexels-sound-on-3760857_hujrch.jpg" alt="" />
            <div class="absolute -right-0 -top-0 h-3 w-3 rounded-full border-2 border-white bg-red-400"></div>
          </div>
          <!-- Icon -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 shadow-lg shadow-blue-300 hover:shadow-none">
            <svg class="text-blue-700" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="absolute -right-1 -bottom-1 rounded-full border border-white bg-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
          <!-- ring image -->
          <div class="relative h-10 w-10 rounded-full shadow-lg shadow-red-300 ring-2 ring-red-400 hover:shadow-none">
            <img class="h-full w-full rounded-full border-2 object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651817165/Tailwind-Component-library/Human%20avatar/pexels-anastasia-shuraeva-5704720_lbcevs.jpg" alt="" />
          </div>
          <!-- Avatar -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 shadow-lg shadow-gray-400 hover:shadow-none">
            <img class="h-9 w-9 rounded-full object-cover pt-1 hover:h-10 hover:w-10" src="https://avatars.dicebear.com/api/avataaars/aoliprapre2.svg" alt="" />
            <div class="absolute -right-1 -bottom-1 rounded-full border border-white bg-rose-500 p-0.5">
              <svg class="text-white" width="12" height="12" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.27049 6.5C6.09277 7.10971 6 7.74975 6 8.4C6 15.8667 3 18 3 18H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.75732 3.87452C8.88254 2.67428 10.4087 2 12 2C13.5913 2 15.1174 2.67428 16.2426 3.87452C17.3678 5.07475 18 6.70261 18 8.4C18 15.8667 21 18 21 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <!-- New badge -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-gray-400 hover:bg-gray-200 hover:shadow-none">
            <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651818407/Tailwind-Component-library/Human%20avatar/pexels-italo-melo-2379004_nibpi3.jpg" alt="" />
            <div class="text-xxs absolute -right-3 -top-2 rounded-lg border border-white bg-green-500 px-0.5 font-medium tracking-tight">New</div>
          </div>
          <!-- Badge number -->
          <div class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 shadow-lg shadow-gray-300 hover:bg-gray-200 hover:shadow-none">
            <img class="h-full w-full rounded-lg object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651821859/Tailwind-Component-library/Human%20avatar/pexels-pixabay-220453_ndnfc1.jpg" alt="" />
            <div class="text-xxs absolute -right-2 -bottom-2 rounded-lg border-2 border-white bg-yellow-500 px-1 font-medium">16</div>
          </div>
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end Shadows avatar -->
          <!-- Group 1 avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Group 1</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <GroupAvatar1 />
            </template>
          </ComponentPad>
           <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <div class="flex items-center">
          <div class="flex items-center -space-x-3">
            <!-- 1 -->
            <div class="flex">
              <div class="h-11 w-11 rounded-full border-2 border-white hover:mr-2">
                <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651820943/Tailwind-Component-library/Human%20avatar/pexels-sound-on-3760857_hujrch.jpg" alt="" />
              </div>
            </div>
            <!-- 2 -->
            <div class="flex">
              <div class="h-11 w-11 rounded-full border-2 border-white hover:mr-2">
                <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651821859/Tailwind-Component-library/Human%20avatar/pexels-pixabay-220453_ndnfc1.jpg" alt="" />
              </div>
            </div>
            <!-- 3 -->
            <div class="flex">
              <div class="h-11 w-11 rounded-full border-2 border-white hover:mr-2">
                <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651821816/Tailwind-Component-library/Human%20avatar/pexels-andrea-piacquadio-3767410_kur6zy.jpg" alt="" />
              </div>
            </div>
            <!-- 4 -->
            <div class="flex">
              <div class="h-11 w-11 rounded-full border-2 border-white hover:mr-2">
                <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651817165/Tailwind-Component-library/Human%20avatar/pexels-anastasia-shuraeva-5704720_lbcevs.jpg" alt="" />
              </div>
            </div>
            <!-- 5 -->
            <div class="flex">
              <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-yellow-200 hover:mr-2">
                <img class="h-10 w-10 rounded-full object-cover pt-1 hover:h-10 hover:w-10" src="https://avatars.dicebear.com/api/avataaars/aolraicppre2.svg" alt="" />
              </div>
            </div>
            <!-- 6 -->
            <div class="flex">
              <div class="h-11 w-11 rounded-full border-2 border-white hover:mr-2">
                <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651817214/Tailwind-Component-library/Human%20avatar/pexels-dalila-dalprat-1844547_zltpkb.jpg" alt="" />
              </div>
            </div>
            <!-- 7 -->
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <div class="text-base font-normal text-gray-600">KM</div>
            </div>
          </div>
          <!-- 8 -->
          <div class="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-gray-400 bg-gray-50">
            <div class="text-base font-normal text-gray-400 hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
        </div>
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end Group 1 avatar -->
          <!-- Group 2 avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Group 2</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <GroupAvatar2 />
            </template>
          </ComponentPad>
           <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <div class="flex items-center">
          <div class="flex items-center -space-x-3">
            <div class="flex">
              <div class="h-11 w-11 rounded-lg border-2 border-white hover:mr-2">
                <img class="h-full w-full rounded-lg object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651820943/Tailwind-Component-library/Human%20avatar/pexels-sound-on-3760857_hujrch.jpg" alt="" />
              </div>
            </div>
            <div class="flex">
              <div class="h-11 w-11 rounded-lg border-2 border-white hover:mr-2">
                <img class="h-full w-full rounded-lg object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651821859/Tailwind-Component-library/Human%20avatar/pexels-pixabay-220453_ndnfc1.jpg" alt="" />
              </div>
            </div>
            <div class="flex">
              <div class="h-11 w-11 rounded-lg border-2 border-white hover:mr-2">
                <img class="h-full w-full rounded-lg object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651817165/Tailwind-Component-library/Human%20avatar/pexels-anastasia-shuraeva-5704720_lbcevs.jpg" alt="" />
              </div>
            </div>
            <div class="flex">
              <div class="h-11 w-11 rounded-lg border-2 border-white hover:mr-2">
                <img class="h-full w-full rounded-lg object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651821816/Tailwind-Component-library/Human%20avatar/pexels-andrea-piacquadio-3767410_kur6zy.jpg" alt="" />
              </div>
            </div>
            <div class="flex">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-white bg-green-400 hover:mr-2">
                <img class="h-10 w-10 rounded-lg object-cover pt-1 hover:h-10 hover:w-10" src="https://avatars.dicebear.com/api/avataaars/aolrqriicppre2.svg" alt="" />
              </div>
            </div>
            <div class="flex">
              <div class="h-11 w-11 rounded-lg border-2 border-white hover:mr-2">
                <img class="h-full w-full rounded-lg object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651817214/Tailwind-Component-library/Human%20avatar/pexels-dalila-dalprat-1844547_zltpkb.jpg" alt="" />
              </div>
            </div>
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <div class="text-base font-medium text-gray-600">+20</div>
            </div>
          </div>
          <div class="ml-2 flex h-9 w-9 items-center justify-center rounded-lg border border-dashed border-gray-400 bg-gray-50">
            <div class="text-base font-normal text-gray-400 hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
        </div>
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end Group 2 avatar -->
          <!-- Info avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Info</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <InfoAvatar />
            </template>
          </ComponentPad>
           <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <!-- 1 -->
          <div class="flex w-1/3 items-center space-x-2">
            <div class="h-12 w-12">
              <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
            </div>
            <div class="flex flex-col">
              <div class="text-base font-bold text-gray-700">Evans Rose</div>
              <div class="text-xs font-semibold text-gray-500">View profile</div>
            </div>
          </div>
          <!-- 2 -->
          <div class="flex w-1/3 items-center space-x-2">
            <div class="relative h-12 w-12">
              <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
              <div class="absolute -right-0 -bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400"></div>
            </div>
            <div class="flex flex-col">
              <div class="text-base font-bold text-gray-700">Evans Rose</div>
              <div class="text-xs font-semibold text-gray-500">View profile</div>
            </div>
          </div>
          <!-- 3 -->
          <div class="flex w-1/3 items-center space-x-2">
            <div class="relative h-12 w-12">
              <img class="h-full w-full rounded-full border-2 border-white object-cover ring-2 ring-green-300" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
            </div>
            <div class="flex flex-col">
              <div class="text-base font-bold text-gray-700">Evans Rose</div>
              <div class="text-xs font-semibold text-gray-500">View profile</div>
            </div>
          </div>
          </div>
          <!-- 4 -->
          <div class="flex w-1/3 items-center space-x-2">
            <div class="relative h-12 w-12">
              <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
              <div class="absolute -right-0 -bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400"></div>
            </div>
            <div class="flex flex-col">
              <div class="text-base font-bold text-gray-700">Evans Rose</div>
              <div class="text-xs font-semibold text-green-500">Online</div>
            </div>
          </div>
          <!-- 5 -->
          <div class="flex w-1/3 items-center space-x-2">
            <div class="relative h-12 w-12">
              <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
              <div class="absolute -right-0 -bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-gray-400"></div>
            </div>
            <div class="flex flex-col">
              <div class="text-base font-bold text-gray-700">Evans Rose</div>
              <div class="text-xs font-semibold text-gray-500">5 min ago</div>
            </div>
          </div>
          <!-- 6 -->
          <div class="flex w-1/3 items-center space-x-2">
            <div class="relative h-12 w-12">
              <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
            </div>
            <div class="flex flex-col">
              <div class="text-base font-bold text-gray-700">Evans Rose</div>
              <div class="w-full text-xs font-semibold text-gray-500">Working 🚀</div>
            </div>
          </div>
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end Info avatar -->
          <!-- DropDown Avatar avatar -->
          <SubHeading>
            <template v-slot:subHeader
              >Drop Down</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <DropDownAvatar />
            </template>
          </ComponentPad>
            <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
           <!-- 1 -->
          <div class="flex w-1/3 items-center space-x-2">
            <div class="h-12 w-12">
              <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
            </div>
            <a class="flex text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </a>
          </div>
          <!-- 2 -->
          <div class="flex w-1/3 items-center space-x-2">
            <div class="relative h-12 w-12">
              <img class="h-full w-full rounded-full object-cover" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
              <div class="absolute -right-0 -bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400"></div>
            </div>
            <div class="flex space-x-2">
              <div class="text-base font-bold text-gray-700">Evans</div>
              <div class="text-xs font-semibold text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="flex w-1/3 items-center space-x-2">
            <div class="relative h-12 w-12">
              <img class="h-full w-full rounded-full border-2 border-white object-cover ring-2 ring-green-300" src="https://res.cloudinary.com/pranav1421/image/upload/v1651838637/Tailwind-Component-library/Human%20avatar/pexels-marta-dzedyshko-2067519_t8v1up.jpg" alt="" />
            </div>
            <div class="flex flex-col">
              <div class="text-base font-bold text-gray-700">Evans Rose</div>
              <div class="text-xs font-semibold text-gray-500">View profile</div>
            </div>
          </div>
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end DropDownAvatar avatar -->
        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <AvatarInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import AvatarInfo from "../components/Avatar/AvatarInfo.vue";
import DefaultAvatar from "../components/Avatar/DefaultAvatar.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import Heading from "../components/Headers/Heading.vue";
import ComponentPad from "../components/Utils/ComponentPad.vue";
import SizeAvatar from "../components/Avatar/SizeAvatar.vue";
import PresenceAvatar from "../components/Avatar/PresenceAvatar.vue";
import PresenceRingAvatar from "../components/Avatar/PresenceRingAvatar.vue";
import CircleAvatar from "../components/Avatar/CircleAvatar.vue";
import ColorAvatar from "../components/Avatar/ColorAvatar.vue";
import BadgeAvatar from "../components/Avatar/BadgeAvatar.vue";
import ShadowsAvatar from "../components/Avatar/ShadowsAvatar.vue";
import SquareAvatar from "../components/Avatar/SquareAvatar.vue";
import GroupAvatar1 from "../components/Avatar/AvatarGroup/GroupAvatar1.vue";
import GroupAvatar2 from "../components/Avatar/AvatarGroup/GroupAvatar2.vue";
import InfoAvatar from "../components/Avatar/InfoAvatar.vue";
import DropDownAvatar from "../components/Avatar/DropDownAvatar.vue";

export default {
  metaInfo: {
    title: "Badges",
  },
  components: {
    Heading,
    ComponentPad,
    AvatarInfo,
    DefaultAvatar,
    SubHeading,
    SizeAvatar,
    PresenceAvatar,
    PresenceRingAvatar,
    CircleAvatar,
    ColorAvatar,
    BadgeAvatar,
    ShadowsAvatar,
    SquareAvatar,
    GroupAvatar1,
    GroupAvatar2,
    InfoAvatar,
    DropDownAvatar,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
