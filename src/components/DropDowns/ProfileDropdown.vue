<template>
  <div class="w-full flex flex-col space-y-4">
    <span v-for="(item, index) in items" :key="index">
      <div>
        <div :class="`w-1/3 ${item.bgColor2} rounded-lg`">
          <div >
            <div
              role="dropdown"
              :class="
                isOpen
                  ? `p-4 text-sm ${item.textColorActive} ${item.bgColorActive} flex flex-row rounded-lg space-x-4 overflow-hidden cursor-pointer`
                  : `p-4 text-sm ${item.textColor} ${item.bgColor} flex flex-row rounded-lg space-x-4 overflow-hidden cursor-pointer`
              "
            >
              <div class="" @click="isOpen = ! isOpen">
                <div class="h-14 w-14 bg-gray-600 rounded-full overflow-hidden" :class="isOpen ? 'ring-2 ring-pink-600': ''">
                  <img
                    src="https://res.cloudinary.com/ortigan/image/upload/v1655120679/IMG_20190909_205547_265_d8ir8r.jpg"
                    alt=""
                    class="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <span
                class="
                  h-full
                  w-full
                  shadow
                  grid grid-flow-row grid-cols-1
                  justify-between
                "
                :class="isOpen ? `d-block ${item.divider}` : 'hidden'"
              >
                <div class="p-6 flex justify-center items-center">
                  <div
                    class="
                      h-48
                      w-full
                      bg-white
                      border-2
                      rounded-lg
                      flex flex-col
                      space-y-2
                      justify-center
                      items-center
                      px-4
                      py-8
                    "
                  >
                    <div
                      class="
                        bg-gray-100
                        text-indigo-600
                        rounded-full
                        p-3
                        flex
                        justify-center
                        items-center
                        uppercase
                        font-bold
                      "
                    >
                      <p>limited account</p>
                    </div>
                    <div
                      class="
                        flex
                        justify-center
                        text-gray-600 text-center text-base
                      "
                    >
                      <p class="">
                        Get a free Designer Account to access all features.
                      </p>
                    </div>
                    <div class="text-pink-500 font-bold underline">
                      <p>Learn more</p>
                    </div>
                  </div>
                </div>
                <span v-for="(menuitem, index) in menuitems" :key="index">
                  <div
                    class="flex flex-row justify-between items-center py-2 px-4 ml-4"
                  >
                    <div class="flex flex-col space-y-2">
                      <p
                        class="font-medium"
                        :class="`${item.bgColor2} ${item.textColor2} font-base`"
                      >
                        {{ menuitem.title }}
                      </p>
                    </div>
                  </div>
                </span>
                <div class="px-6"><hr /></div>
                <span v-for="(mitem, index) in mitems" :key="index">
                  <div
                    class="flex flex-row justify-between items-center py-2 px-4 ml-4"
                  >
                    <div class="flex flex-col space-y-1">
                      <p
                        class="font-medium"
                        :class="`${item.bgColor2} ${item.textColor2} font-base`"
                      >
                        {{ mitem.title }}
                      </p>
                    </div>
                  </div>
                </span>
                <div class="px-6"><hr /></div>
                <span v-for="(nitem, index) in nitems" :key="index">
                  <div
                    class="flex flex-row space-x-4 items-center py-2 px-4 ml-4"
                  >
                  <div v-html="nitem.svg">
                    </div>
                    <div class="flex flex-col space-y-1">
                      <p
                        class="font-medium"
                        :class="`${item.bgColor2} ${item.textColor2} font-base`"
                      >
                        {{ nitem.title }}
                      </p>
                    </div>
                  </div>
                </span>
                <div class="px-6"><hr /></div>
                <span v-for="(pitem, index) in pitems" :key="index">
                  <div
                    class="flex flex-row justify-between items-center py-2 px-4 ml-4"
                  >
                    <div class="flex flex-col space-y-1">
                      <p
                        class="font-medium"
                        :class="`${item.bgColor2} ${item.textColor2} font-base`"
                      >
                        {{ pitem.title }}
                      </p>
                    </div>
                  </div>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      items: [
        {
          id: 1,
          type: "Nested",
          textColor: "text-gray-400",
          bgColor: "bg-white",
          bgColor2: "bg-white",
          textColor2: "text-neutral-500",
          textColor3: "text-slate-700",
          border: "border-1",
          borderColor: "border-slate-600",
          textColorActive: "text-slate-600",
          bgColorActive: "bg-white",
          divider: "divide-neutral-700",
        },
      ],
      menuitems: [
        {
          id: 1,
          title: "Profile",
          descr: "A marketplace for digital assets",
          leftimg:
            "https://res.cloudinary.com/ortigan/image/upload/v1654687343/high-resolution-cube-3d-purple-box-18_jqtmkq.png",
        },
      ],
      mitems: [
        {
          id: 1,
          title: "Edit Profile",
          descr: "A marketplace for digital assets",
          leftimg:
            "https://res.cloudinary.com/ortigan/image/upload/v1654687343/high-resolution-cube-3d-purple-box-18_jqtmkq.png",
        },
        {
          id: 2,
          title: "Edit Work Preferences",
          descr: "Icons, Illustrations, Patterns, Textures...",
          leftimg:
            "https://res.cloudinary.com/ortigan/image/upload/v1654687958/Group_61_lelqjz.png",
        },
      ],
      nitems: [
        {
          id: 1,
          title: "My Boosted Shots",
          descr: "A marketplace for digital assets",
          svg:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
</svg>`,
          
          leftimg:
            "https://res.cloudinary.com/ortigan/image/upload/v1654687343/high-resolution-cube-3d-purple-box-18_jqtmkq.png",
        },
        {
          id: 2,
          title: "My Likes",
          descr: "A marketplace for digital assets",
          svg:`<svg class="h-5 w-5 text-neutral-400" viewBox="0 0 32 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.1888 1.27992C19.1888 0.940466 19.3237 0.614913 19.564 0.374881C19.8042 0.134849 20.1301 0 20.4699 0H30.7189C31.0587 0 31.3845 0.134849 31.6248 0.374881C31.865 0.614913 32 0.940466 32 1.27992V11.5193C32 11.8588 31.865 12.1843 31.6248 12.4243C31.3845 12.6644 31.0587 12.7992 30.7189 12.7992C30.3791 12.7992 30.0532 12.6644 29.813 12.4243C29.5727 12.1843 29.4378 11.8588 29.4378 11.5193V4.86371L20.1803 16.1705C20.067 16.3087 19.926 16.4217 19.7663 16.5022C19.6067 16.5826 19.4319 16.6288 19.2533 16.6377C19.0747 16.6466 18.8962 16.6181 18.7293 16.554C18.5624 16.4898 18.4108 16.3915 18.2843 16.2653L11.6557 9.64294L2.28815 22.5113C2.08323 22.7716 1.78528 22.9424 1.45692 22.9879C1.12855 23.0333 0.795342 22.9498 0.527303 22.755C0.259265 22.5601 0.0772704 22.269 0.0195645 21.9429C-0.0381414 21.6167 0.0329343 21.281 0.217856 21.0061L10.4669 6.92694C10.5756 6.77723 10.7156 6.65285 10.8771 6.56239C11.0387 6.47192 11.2179 6.41752 11.4025 6.40292C11.5871 6.38832 11.7727 6.41387 11.9464 6.47782C12.1202 6.54177 12.278 6.6426 12.409 6.77335L19.0939 13.4545L28.0157 2.55985H20.4699C20.1301 2.55985 19.8042 2.425 19.564 2.18496C19.3237 1.94493 19.1888 1.61938 19.1888 1.27992Z"/>
</svg>`,
          leftimg:
            "https://res.cloudinary.com/ortigan/image/upload/v1654687343/high-resolution-cube-3d-purple-box-18_jqtmkq.png",
        },
        {
          id: 3,
          title: "My Collections",
          descr: "A marketplace for digital assets",
          svg:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" />
</svg>`,
          leftimg:
            "https://res.cloudinary.com/ortigan/image/upload/v1654687343/high-resolution-cube-3d-purple-box-18_jqtmkq.png",
        },
        {
          id: 4,
          title: "Go pro",
          descr: "A marketplace for digital assets",
          svg:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>`,
          leftimg:
            "https://res.cloudinary.com/ortigan/image/upload/v1654687343/high-resolution-cube-3d-purple-box-18_jqtmkq.png",
        },
      ],
      pitems: [
        {
          id: 1,
          title: "Account Settings",
          descr: "A marketplace for digital assets",
          leftimg:
            "https://res.cloudinary.com/ortigan/image/upload/v1654687343/high-resolution-cube-3d-purple-box-18_jqtmkq.png",
        },
        {
          id: 2,
          title: "Sign Out",
          descr: "Icons, Illustrations, Patterns, Textures...",
          leftimg:
            "https://res.cloudinary.com/ortigan/image/upload/v1654687958/Group_61_lelqjz.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>