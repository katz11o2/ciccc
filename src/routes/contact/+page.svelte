<script>
	let formData = {
	  companyName: '',
	  contactName: '',
	  email: '',
	  phone: '',
	  industry: '',
	  submissionType: 'problem',  // Default value
	  description: ''
	};
  
	function handleSubmit() {
	  console.log('Form submitted:', formData);
  
	  // Handling based on type of query
	  switch (formData.submissionType) {
		case 'problem':
		  console.log('User submitted a problem statement.');
		  break;
		case 'design':
		  console.log('User submitted a design idea.');
		  break;
		case 'others':
		  console.log('User selected "Others" as the type of query.');
		  break;
		default:
		  console.log('Unknown submission type.');
	  }
	}
  
	const contactInfo = {
	  industry: {
		name: 'Dr. Varalatchoumy M',
		email: 'choss@cambridge.edu.in',
		phone: '+91 95355 17571'
	  },
	  center: {
		name: 'Cambarian Incubation Centre',
		address: ['Chikkabasavanapura, Krishnarajapuram, Bengaluru - 560036'],
		hours: 'Monday - Friday, 9:00 AM - 4:00 PM'
	  }
	};
  </script>
  
  <section class="relative pt-20 pb-20">
	<div class="absolute inset-0 opacity-20">
	  <div class="absolute left-1/4 h-56 w-96 rounded-full bg-blue-500/30 blur-[100px]"></div>
	  <div class="absolute top-1/2 right-1/4 h-56 w-96 rounded-full bg-cyan-500/30 blur-[100px]"></div>
	</div>
  
	<div class="relative container mx-auto px-6 text-[#000A30]">
	  <div class="mb-10 text-center">
		<span class="mb-2 inline-block rounded-lg bg-white/10 px-3 py-1.5 text-sm font-medium text-[#000A30] backdrop-blur-sm">Connect With Us</span>
		<h2 class="mb-4 text-3xl font-bold text-[#000A30] lg:text-4xl">Let's Build The <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Future Together</span></h2>
		<p class="mx-auto max-w-3xl text-base lg:text-lg text-[#000A30]">Whether you're looking to collaborate or have an innovative idea, we're here to help</p>
	  </div>
  
	  <div class="grid gap-8 lg:grid-cols-5">
		<!-- Contact Info -->
		<div class="space-y-8 lg:col-span-2">
		  <div class="rounded-2xl bg-white/10 p-6 backdrop-blur-md shadow-xl transition hover:bg-white/10">
			<h3 class="mb-3 text-2xl font-bold text-blue-900">Contact Us</h3>
			<p class="text-lg font-semibold">{contactInfo.industry.name}</p>
			<div class="space-y-3 mt-4 text-[#000A30]">
			  <a href={`mailto:${contactInfo.industry.email}`} class="flex items-center gap-2 hover:text-blue-500 transition">
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
				</svg>
				{contactInfo.industry.email}
			  </a>
			  <a href={`tel:${contactInfo.industry.phone}`} class="flex items-center gap-2 hover:text-blue-500 transition">
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
				</svg>
				{contactInfo.industry.phone}
			  </a>
			</div>
		  </div>
  
		  <div class="rounded-2xl bg-white/10 p-6 backdrop-blur-md shadow-xl transition hover:bg-white/10">
			<h3 class="mb-3 text-2xl font-bold text-blue-900">Visit Us</h3>
			{#each contactInfo.center.address as line}
			  <p class="text-[#000A30]">{line}</p>
			{/each}
			<div class="flex items-center gap-2 mt-3 text-[#000A30]">
			  <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
			  </svg>
			  {contactInfo.center.hours}
			</div>
			<a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x3bae11aeab858e35:0xf8f534df379561ed?source=g.page.share"
			  target="_blank"
			  class="mt-4 inline-flex items-center gap-2 rounded-md border border-blue-400 px-4 py-2 text-sm text-[#000A30] hover:bg-white/20 transition">
			  View on Map
			  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M7 17L17 7M17 7H7M17 7V17" />
			  </svg>
			</a>
		  </div>
		</div>
  
		<!-- Form -->
		<div class="lg:col-span-3">
		  <form on:submit|preventDefault={handleSubmit}
			class="rounded-2xl bg-white/10 p-8 backdrop-blur-md shadow-xl space-y-10 text-[#000A30]">
  
			<div class="grid md:grid-cols-2 gap-6">
			  <div>
				<label class="block mb-1 text-sm font-medium">Name</label>
				<input type="text" bind:value={formData.companyName} required placeholder="Your name"
				  class="w-full rounded-lg border border-blue-900 bg-white/5 px-4 py-3 placeholder:text-blue-200/50 focus:ring-blue-900 focus:border-blue-900 focus:outline-none" />
			  </div>
  
			  <div>
				<label class="block mb-1 text-sm font-medium">Email</label>
				<input type="email" bind:value={formData.email} required placeholder="your@email.com"
				  class="w-full rounded-lg border border-blue-900 bg-white/5 px-4 py-3 placeholder:text-blue-200/50 focus:ring-blue-900 focus:border-blue-900 focus:outline-none" />
			  </div>
  
			  <div>
				<label class="block mb-1 text-sm font-medium">Phone</label>
				<input type="tel" bind:value={formData.phone} placeholder="9916455287"
				  class="w-full rounded-lg border border-blue-900 bg-white/5 px-4 py-3 placeholder:text-blue-200/50 focus:ring-blue-900 focus:border-blue-900 focus:outline-none" />
			  </div>
  
			  <div>
				<label class="block mb-1 text-sm font-medium">Industry</label>
				<select bind:value={formData.industry}
				  class="w-full rounded-lg border border-blue-900 bg-white/5 px-4 py-3 text-[#000A30] focus:ring-blue-900 focus:border-blue-900 focus:outline-none">
				  <option value="" disabled selected hidden>Select your industry</option>
				  <option value="technology">Technology</option>
				  <option value="healthcare">Healthcare</option>
				  <option value="education">Education</option>
				  <option value="finance">Finance</option>
				  <option value="other">Other</option>
				</select>
			  </div>
  
			  <div>
				<label class="block mb-1 text-sm font-medium">Type of Query</label>
				<select bind:value={formData.submissionType}
				  class="w-full rounded-lg border border-blue-900 bg-white/5 px-4 py-3 text-[#000A30] focus:ring-blue-900 focus:border-blue-900 focus:outline-none">
				
				  <option value="problem">Select your query</option>
				  <option value="problem">Submission of problem statement</option>
				  <option value="design">Submission of design idea</option>
				  <option value="others">Others</option>
				
				</select>
			  </div>
			</div>
  
			<div>
			  <label class="block mb-1 text-sm font-medium">Description</label>
			  <textarea bind:value={formData.description} rows="4" required
				placeholder="Describe your query in detail..."
				class="w-full rounded-lg border border-blue-900 bg-white/5 px-4 py-3 placeholder:text-blue-200/50 focus:ring-blue-900 focus:border-blue-900 focus:outline-none"></textarea>
			</div>
  
			<button type="submit"
			  class="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">Submit</button>
		  </form>
		</div>
	  </div>
	</div>
  </section>
  