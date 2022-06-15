<template>
  <Layout>
    <div class="flex p-4">
      <!-- content -->
      <div class="flex h-screen px-4 overflow-y-hidden scrollBar">
        <div class="overflow-y-auto px-4">
          <Heading >
            <template>
              Badge
            </template>
          </Heading>
          <div>
            <p class="text-base font-primary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quam architecto culpa unde accusamus illo error
              neque explicabo, numquam ut, qui eligendi magnam non quis fugiat
              impedit dolore aliquam?
            </p>
          </div>
          <!-- Default badge -->
          <SubHeading>
            <template v-slot:subHeader
              >Default badge</template
            >
          </SubHeading>
          <ComponentPad>
            <template>
              <DefaultBadge />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <span class="mr-4 rounded-md bg-gray-700 py-0.5 px-2 text-xs font-normal text-white"> Badge </span>
          <span class="mr-4 rounded-md bg-cyan-500 py-0.5 px-2 text-xs font-normal text-white"> Primary </span>
          <span class="mr-4 rounded-md bg-zinc-100 py-0.5 px-2 text-xs font-normal text-gray-500"> Ghost </span>
          <span class="mr-4 rounded-md bg-gray-100 py-0.5 px-2 text-xs font-normal text-gray-400"> Light </span>
          <span class="mr-4 rounded-md bg-gray-900 py-0.5 px-2 text-xs font-normal text-white"> Dark </span>
          <span class="mr-4 rounded-md bg-gray-100 py-0.5 px-2 text-xs font-normal text-gray-300"> Disabled </span>
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end default badge -->
          <!-- Larger badge -->
          <SubHeading>
            <template v-slot:subHeader>
              Larger badge
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <LargerBadge />
            </template>
          </ComponentPad>
            <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <span class="mr-4 rounded-md bg-gray-700 py-0.5 px-2 text-sm font-normal text-white"> Badge </span>
          <span class="mr-4 rounded-md bg-cyan-500 py-0.5 px-2 text-sm font-normal text-white"> Primary </span>
          <span class="mr-4 rounded-md bg-zinc-100 py-0.5 px-2 text-sm font-normal text-gray-500"> Ghost </span>
          <span class="mr-4 rounded-md bg-gray-100 py-0.5 px-2 text-sm font-normal text-gray-400"> Light </span>
          <span class="mr-4 rounded-md bg-gray-900 py-0.5 px-2 text-sm font-normal text-white"> Dark </span>
          <span class="mr-4 rounded-md bg-gray-100 py-0.5 px-2 text-sm font-normal text-gray-300"> Disabled </span>
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end Larger badge -->
          <!-- state color badge -->
          <SubHeading>
            <template v-slot:subHeader>
              Badge State color
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <BadgeState />
            </template>
          </ComponentPad>
            <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <span class="mr-4 rounded-md py-0.5 px-2 text-sm font-medium text-sky-700 hover:text-sky-800 bg-sky-100 hover:bg-sky-200"> Info </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 bg-emerald-100 hover:bg-emerald-200"> Success </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-sm font-medium text-amber-700 hover:text-amber-800 bg-amber-100 hover:bg-yellow-200"> Warning </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-sm font-medium text-rose-700 hover:text-rose-800 bg-rose-100 hover:bg-rose-200"> Error </span>
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end state color badge -->
          <!-- Outline badge -->
          <SubHeading>
            <template v-slot:subHeader>
              Outline badge
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <OutlineBadge />
            </template>
          </ComponentPad>
           <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-700 border border-gray-700"> Badge </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-cyan-500 border border-cyan-500"> Primary </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-300 hover:text-gray-500 border border-gray-200"> Ghost </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-rose-700 border border-gray-400"> Light </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-900 border border-gray-900"> Dark </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-300 border border-gray-300"> Disabled </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-sky-600 border border-sky-600"> Info </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-emerald-600 border border-emerald-600"> Success </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-amber-600 border border-amber-600"> Warning </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-rose-600 border border-amber-600"> Error </span>          
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end outline badge -->
          <!-- Pill badge -->
          <SubHeading>
            <template v-slot:subHeader>
              Pill badge
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <PillBadge />
            </template>
          </ComponentPad>
           <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-white bg-gray-600"> Badge </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-white bg-cyan-500"> Primary </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-400 bg-zinc-100 hover:text-gray-500 hover:bg-zinc-200"> Ghost </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-400 bg-gray-100"> Light </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-white bg-gray-900"> Dark </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-300 bg-gray-100"> Disabled </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-sky-700 bg-sky-100 hover:text-sky-800 hover:bg-sky-200"> Info </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-emerald-700 bg-emerald-100 hover:text-emerald-800 hover:bg-emerald-200"> Success </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-amber-700 bg-yellow-100 hover:text-amber-800 hover:bg-yellow-200"> Warning </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-rose-700 hover:text-rose-800 bg-red-100 hover:bg-red-200"> Error </span>          
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end Pill badge -->
          <!-- Pill outline badge -->
          <SubHeading>
            <template v-slot:subHeader>
              Pill Outline badge
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <PillOutlineBadge />
            </template>
          </ComponentPad>
          <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-700 border border-gray-700"> Badge </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-cyan-500 border border-cyan-500"> Primary </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-300 hover:text-gray-500 border border-gray-200"> Ghost </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-400 border border-gray-400"> Light </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-900 border border-gray-900"> Dark </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-gray-300 border border-gray-300"> Disabled </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-sky-600  border border-sky-600"> Info </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-emerald-600 border border-emerald-600"> Success </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-amber-600 border border-amber-600"> Warning </span>
          <span class="mr-4 rounded-md py-0.5 px-2 text-xs font-medium text-rose-600 border border-amber-600"> Error </span>          
          </script></code></pre>
          <!-- code snippet end -->
          <!-- end Pill outline badge -->
          <!-- Rectange badge -->
          <SubHeading>
            <template v-slot:subHeader>
              Rectangle badge
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <RectangleBadge />
            </template>
          </ComponentPad>
           <!-- code snippet -->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <div class="flex flex-wrap p-4 space-x-4">
          <!-- Default badge -->
          <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-white bg-gray-700">
            <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
            <div>Badge</div>
          </div>
          <!-- Primary badge -->
          <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-white bg-cyan-500">
            <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
            <div>Primary</div>
          </div>
          <!-- Ghost badge -->
          <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-gray-500 bg-zinc-100">
            <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
            <div>Ghost</div>
          </div>
          <!-- Light badge -->
          <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-gray-400 bg-gray-100">
            <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
            <div>Light</div>
          </div>
          <!-- Dark badge -->
          <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-gray-100 bg-gray-900">
            <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
            <div>Dark</div>
          </div>
          <!-- Disabled badge -->
          <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-gray-100 bg-gray-300">
            <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
            <div>Disabled</div>
          </div>
          <!-- Info badge -->
          <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-sky-700 bg-sky-100 hover:text-sky-800 hover:bg-sky-200">
            <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
            <div>Info</div>
          </div>
          <!-- Success badge -->
          <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-emerald-700 bg-emerald-100 hover:text-emerald-800 hover:bg-emerald-200">
            <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
            <div>Success</div>
          </div>
          <!-- Warning badge -->
          <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-amber-700 bg-yellow-100 hover:text-amber-800 hover:bg-yellow-200">
            <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
            <div>Warning</div>
          </div>
          <!-- Error badge -->
          <div class="flex items-center gap-2 rounded-sm py-1 px-3 text-xs font-normal text-rose-700 hover:text-rose-800 bg-red-100 hover:bg-red-200">
            <div><svg class="h-1.5 w-1.5" clip-rule="evenodd" fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" /></svg></div>
            <div>Error</div>
          </div>
          </div>
        </script></code></pre>
          <!-- code snippet end -->
          <!-- end Rectangle badge -->
          <!-- Cancel badge -->
          <SubHeading>
            <template v-slot:subHeader>
              Badge with cancel button
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <CancelBadge />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <div class="flex flex-wrap p-4 space-x-4">
          <!-- Default badge -->
          <div class="py-0.5 px-2 flex items-center justify-between text-sm rounded-md font-normal gap-2 text-white bg-gray-700">
            <div>Badge</div>
            <div type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </div>
          </div>
          <!-- Primary badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-white bg-cyan-500">
            <div>Primary</div>
            <div type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </div>
          </div>
          <!-- Ghost badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-gray-500 bg-zinc-100">
            <div>Ghost</div>
            <div type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </div>
          </div>
          <!-- Light badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-gray-400 bg-gray-100">
            <div>Light</div>
            <div type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </div>
          </div>
          <!-- Dark badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-gray-100 bg-gray-900">
            <div>Dark</div>
            <div class="pl-1" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <!-- Disabled badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-gray-100 bg-gray-300">
            <div>Disabled</div>
            <div type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </div>
          </div>
          <!-- Info badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-sky-700 bg-sky-100 hover:text-sky-800 hover:bg-sky-200">
            <div>Info</div>
            <div type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </div>
          </div>
          <!-- Success badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-emerald-700 bg-emerald-100 hover:text-emerald-800 hover:bg-emerald-200">
            <div>Success</div>
            <div type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </div>
          </div>
          <!-- Warning badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-amber-700 bg-yellow-100 hover:text-amber-800 hover:bg-yellow-200">
            <div>Warning</div>
            <div type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </div>
          </div>
          <!-- Error badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-3 text-xs font-normal text-rose-700 hover:text-rose-800 bg-red-100 hover:bg-red-200">
            <div>Error</div>
            <div type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </div>
          </div>
        </div>
        </script></code></pre>
        <!-- code snippet end --->
          <!-- end Cancel badge -->
          <!-- Link badge -->
          <SubHeading>
            <template v-slot:subHeader>
              Badges as link
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <LinkBadge />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <div class="flex flex-wrap p-4 space-x-4">
          <!-- Default badge -->
          <div class="flex items-center gap-2 rounded-md py-0.5 px-2.5 text-xs font-normal text-white bg-gray-700">
            <a href="#">Badge</a>
          </div>
          <!-- Primary badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-white bg-cyan-500">
            <a href="#">Primary</a>
          </div>
          <!-- Ghost badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-gray-500 bg-zinc-100">
            <a href="#">Ghost</a>
          </div>
          <!-- Light badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-gray-400 bg-gray-100">
            <a href="#">Light</a>
          </div>
          <!-- Dark badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-gray-100 bg-gray-900">
            <a href="#">Dark</a>
            <div class="pl-1" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </div>
          </div>
          <!-- Disabled badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-gray-100 bg-gray-300">
            <a href="#">Disabled</a>
          </div>
          <!-- Info badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-sky-700 bg-sky-100">
            <a href="#">Info</a>
            <div type="button">
              <svg width="18" height="18" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 11.5V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7.51L12.01 7.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>  
            </div>
          </div>
          <!-- Success badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-emerald-700 bg-emerald-100">
            <a href="#">Success</a>
            <div type="button">
              <svg width="18" height="18" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>    
            </div>
          </div>
          <!-- Warning badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-amber-700 bg-yellow-100">
            <a href="#">Warning</a>
            <div type="button">
              <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0429 21H3.95705C2.41902 21 1.45658 19.3364 2.22324 18.0031L10.2662 4.01533C11.0352 2.67792 12.9648 2.67791 13.7338 4.01532L21.7768 18.0031C22.5434 19.3364 21.581 21 20.0429 21Z" stroke="currentColor" stroke-linecap="round"/><path d="M12 9V13" stroke="currentColor" stroke-linecap="round"/><path d="M12 17.01L12.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
          <!-- Error badge -->
          <div class="flex items-center gap-2 rounded-md py-1 px-2.5 text-xs font-normal text-rose-700 bg-red-100">
            <a href="#">Error</a>
            <div type="button">
              <svg width="18" height="18" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
        </div>
          </script></code></pre>
          <!-- code snippet end--->
          <!-- end Link badge -->
          <!--  badge Sizes -->
          <SubHeading>
            <template v-slot:subHeader>
              Badges as Sizes
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <BadgeSizes />
            </template>
          </ComponentPad>
           <!-- code snippet --->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <div class="flex p-4">
          <!-- xxs -->
          <div class="flex flex-wrap items-center">
            <span class="text-xxs mr-4 rounded-md bg-gray-700 py-0.5 px-2 font-normal text-white">Badge</span>
          </div>
          <!-- sm -->
          <div class="flex flex-wrap items-center">
            <span class="mr-4 rounded-md bg-gray-700 py-1 px-3 text-sm font-normal text-white">Badge</span>
          </div>
          <!-- base -->
          <div class="flex flex-wrap items-center">
            <span class="mr-4 rounded-md bg-gray-700 py-1 px-4 text-base font-normal text-white">Badge</span>
          </div>
          <!-- xl -->
          <div class="flex flex-wrap items-center">
            <span class="mr-4 rounded-md bg-gray-700 py-1 px-4 text-xl font-normal text-white">Badge</span>
          </div>
          <!-- 2xl -->
          <div class="flex flex-wrap items-center">
            <span class="mr-4 rounded-md bg-gray-700 py-1 px-4 text-2xl font-normal text-white">Badge</span>
          </div>
          </div>
          </script></code></pre>
          <!-- code snippet end --->
          <!-- end  badge Sizes -->
          <!-- Position Badge -->
          <SubHeading>
            <template v-slot:subHeader>
              Positioned badge
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <PositionBadge />
            </template>
          </ComponentPad>
           <!-- code snippet --->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <div class="flex gap-4 p-4">
            <!-- 1st -->
            <div class="flex flex-wrap items-center gap-4">
              <div class="relative rounded-md bg-gray-700 py-2 px-4 text-xs font-semibold text-white">
                Inbox
                <div class="text-xxs  absolute -top-3 -right-2 flex items-center rounded-full bg-red-500 py-0.5 px-1.5">99+</div>
              </div>
            </div>
            <!-- 2nd -->
            <div class="flex flex-wrap items-center gap-4">
              <div class="relative rounded-md bg-gray-700 py-2 px-3 text-xs font-semibold text-white">
                Inbox
                <span class="text-xxs ml-1 rounded-full bg-red-500 py-0.5 px-1.5">99+</span>
              </div>
            </div>
            <!-- 3rd -->
            <div class="flex flex-wrap items-center gap-4">
              <div class="relative rounded-md bg-gray-700 py-2 px-4 text-base font-semibold text-white">
                Inbox
                <div class="absolute -top-3 -right-2 flex items-center rounded-full bg-red-500 py-0.5 px-1.5 text-xxs">99+</div>
              </div>
            </div>
            <!-- 4th -->
            <div class="flex flex-wrap items-center gap-4">
              <div class="relative rounded-md bg-gray-700 py-2 px-3 text-base font-semibold text-white">
                Inbox
                <span class="ml-1 rounded-full bg-red-500 py-0.5 px-1.5 text-xxs">99+</span>
              </div>
            </div>
          </div>
          </script></code></pre>
          <!-- code snippet end --->
          <!-- end Position Badge -->
          <!-- Text Badge -->
          <SubHeading>
            <template v-slot:subHeader>
              Text badge
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <NewBadge />
            </template>
          </ComponentPad>
           <!-- code snippet --->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <div class="flex flex-col gap-3">
          <!-- badge xxs -->
          <div class="flex space-x-2 items-center">
            <div class="text-xs font-medium text-gray-700">Heading</div>
            <div class="text-xs py-0.5 px-1.5 bg-gray-700 text-white rounded-md font-normal">New</div>
          </div>
          <!-- badge xs -->
          <div class="flex space-x-2 items-center">
            <div class="text-base font-medium text-gray-700">Heading</div>
            <div class="text-xs py-0.5 px-1.5 bg-gray-700 text-white rounded-md font-normal">New</div>
          </div>
          <!-- badge sm -->
          <div class="flex space-x-2 items-center">
            <div class="text-lg font-medium text-gray-700">Heading</div>
            <div class="text-sm py-0.5 px-1.5 bg-gray-700 text-white rounded-md font-normal">New</div>
          </div>
          <!-- badge base -->
          <div class="flex space-x-2 items-center">
            <div class="text-2xl font-medium text-gray-700">Heading</div>
            <div class="text-base py-0.5 px-1.5 bg-gray-700 text-white rounded-md font-normal">New</div>
          </div>
          <!-- badge base -->
          <div class="flex space-x-2 items-center">
            <div class="text-3xl font-medium text-gray-700">Heading</div>
            <div class="text-base py-0.5 px-1.5 bg-gray-700 text-white rounded-md font-normal">New</div>
          </div>
          </div>
          </script></code></pre>
          <!-- code snippet end --->
          <!-- end text Badge -->
          <!-- Text Badge -->
          <SubHeading>
            <template v-slot:subHeader>
              Icon Badge 
            </template>
          </SubHeading>
          <ComponentPad>
            <template>
              <IconBadge />
            </template>
          </ComponentPad>
          <!-- code snippet --->
          <pre><code class="language-markup"><script type="prism-html-markup">
          <div class="flex gap-3 p-4">
          <div class="flex items-center space-x-1 rounded-md bg-sky-100 py-0.5 px-2 text-xs font-normal text-sky-700">
            <div type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="font-medium">24 hours ago</div>
          </div>
          <!--  -->
          <div class="flex items-center space-x-1 rounded-md bg-gray-700 py-0.5 px-2 text-xs font-normal text-gray-100">
            <div type="button">
              <svg width="14" height="14" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="font-medium">Fork</div>
          </div>
          <!--  -->
          <div class="flex items-center space-x-1 rounded-md bg-blue-400 py-0.5 px-2 text-xs font-normal text-white">
            <div type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z" /><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" /></svg>
            </div>
            <div class="font-medium">Follow</div>
          </div>
          <!--  -->
          <div class="flex items-center space-x-1 rounded-md y-0.5 px-2 text-xs font-normal text-white bg-black">
            <div type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
            </div>
            <div class="font-medium">Working from home</div>
          </div>
          </div>
          </script></code></pre>
          <!-- code snippet end --->
          <!-- end New Badge -->
        </div>
      </div>
      <!-- right sidebar -->
      <div class="hidden lg:block">
        <div class="w-40 flex flex-col min-h-screen overflow-y-hidden">
          <div class="overflow-y-auto">
            <BadgeInfo />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import BadgeInfo from "../components/Badge/BadgeInfo.vue";
import DefaultBadge from "../components/Badge/DefaultBadge.vue";
import LargerBadge from "../components/Badge/LargerBadge.vue";
import BadgeState from "../components/Badge/BadgeState.vue";
import CancelBadge from "../components/Badge/CancelBadge.vue";
import LinkBadge from "../components/Badge/LinkBadge.vue";
import PositionBadge from "../components/Badge/PositionBadge.vue";
import PillBadge from "../components/Badge/PillBadge.vue";
import IconBadge from "../components/Badge/IconBadge.vue";
import NewBadge from "../components/Badge/NewBadge.vue";
import BadgeSizes from "../components/Badge/BadgeSizes.vue";
import PillOutlineBadge from "../components/Badge/PillOutlineBadge.vue";
import Heading from "../components/Headers/Heading.vue";
import SubHeading from "../components/Headers/SubHeading.vue";
import ComponentPad from "../components/Utils/ComponentPad.vue";
import OutlineBadge from "../components/Badge/OutlineBadge.vue";
import RectangleBadge from "../components/Badge/RectangleBadge.vue";
export default {
  metaInfo: {
    title: "Badges",
  },
  components: {
    BadgeInfo,
    Heading,
    ComponentPad,
    DefaultBadge,
    SubHeading,
    LargerBadge,
    BadgeState,
    PillBadge,
    PillOutlineBadge,
    OutlineBadge,
    IconBadge,
    CancelBadge,
    LinkBadge,
    RectangleBadge,
    PositionBadge,
    BadgeSizes,
    NewBadge,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
