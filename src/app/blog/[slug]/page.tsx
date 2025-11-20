import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

// This would typically come from a database or CMS
const blogPosts = [
  {
    slug: "choosing-solar-power-system-nigeria",
    title:
      "How to Choose the Right Solar Power System for Your Business in Nigeria",
    category: "POWER SOLUTIONS",
    author: "Techville Engineering Team",
    date: "November 18, 2025",
    excerpt:
      "A complete guide to selecting solar inverters, battery capacity, and panel configurations that guarantee 24/7 uptime for Nigerian businesses facing unstable grid power...",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200",
    content: `
      <h2>Why Solar Power is Critical for Nigerian Businesses</h2>
      <p>Power instability remains the single greatest operational challenge for businesses across Nigeria. With grid failures occurring multiple times daily in many regions, relying solely on NEPA power means accepting chronic downtime, lost productivity, and damaged equipment. The question isn't whether your business needs backup power—it's whether you continue burning diesel at ₦800-1,200 per liter or invest in solar infrastructure that pays for itself.</p>
      
      <h3>Understanding Your Power Requirements</h3>
      <p>Before selecting any solar system, you need accurate data on your actual consumption:</p>
      <ul>
        <li><strong>Peak Load Analysis:</strong> What's your maximum simultaneous power draw? Count all computers, servers, printers, air conditioning units, lighting, and other equipment that run concurrently during business hours.</li>
        <li><strong>Daily Energy Consumption:</strong> Multiply your average hourly consumption by operating hours. A typical 20-workstation office with basic IT infrastructure consumes 40-60 kWh daily.</li>
        <li><strong>Autonomy Requirements:</strong> How many hours of backup power do you need? Most Nigerian businesses require 12-18 hours of autonomy to cover overnight and extended outages.</li>
        <li><strong>Future Expansion:</strong> Plan for 30-50% growth capacity to avoid costly system upgrades within 2-3 years.</li>
      </ul>
      
      <h3>Solar System Components Explained</h3>
      <p><strong>Solar Panels:</strong> Modern monocrystalline panels (400-550W) deliver better efficiency in Nigeria's high-temperature climate than polycrystalline alternatives. For a 10kW system, expect 20-25 panels requiring 35-45 square meters of roof space.</p>
      
      <p><strong>Inverter Selection:</strong> This is your system's brain. Pure sine wave inverters (5-15kW range) are mandatory for sensitive IT equipment. Hybrid inverters manage solar input, battery charging, and grid connection simultaneously. Premium brands like Victron Energy, SMA, and Schneider Electric dominate Nigerian institutional deployments due to proven reliability.</p>
      
      <p><strong>Battery Banks:</strong> Lithium batteries (LiFePO4) cost 2-3x more upfront than tubular lead-acid but deliver 3,000-5,000 cycles versus 1,200-1,500 cycles, making them cost-effective over 7-10 years. For a 15kWh system (sufficient for most SMEs), expect ₦3.5-4.5 million for lithium versus ₦1.8-2.5 million for lead-acid.</p>
      
      <h3>Cost Breakdown for Nigerian Businesses</h3>
      <table style="width: 100%; margin: 20px 0; border-collapse: collapse;">
        <tr style="background-color: #1a2332;">
          <th style="padding: 12px; text-align: left; border: 1px solid #333;">System Size</th>
          <th style="padding: 12px; text-align: left; border: 1px solid #333;">Suitable For</th>
          <th style="padding: 12px; text-align: left; border: 1px solid #333;">Total Investment</th>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #333;">5kW Solar + 10kWh Battery</td>
          <td style="padding: 12px; border: 1px solid #333;">Small office (5-10 workstations)</td>
          <td style="padding: 12px; border: 1px solid #333;">₦4.5 - 6 million</td>
        </tr>
        <tr style="background-color: #1a2332;">
          <td style="padding: 12px; border: 1px solid #333;">10kW Solar + 20kWh Battery</td>
          <td style="padding: 12px; border: 1px solid #333;">Medium business (20-30 workstations)</td>
          <td style="padding: 12px; border: 1px solid #333;">₦8 - 11 million</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #333;">20kW Solar + 40kWh Battery</td>
          <td style="padding: 12px; border: 1px solid #333;">Large office/school (50+ workstations)</td>
          <td style="padding: 12px; border: 1px solid #333;">₦15 - 20 million</td>
        </tr>
      </table>
      
      <h3>Common Mistakes to Avoid</h3>
      <p><strong>Undersizing Your System:</strong> The most expensive mistake is buying a 5kW system when you need 8kW. Inverters running at 90-100% capacity continuously fail prematurely. Always oversize by 20-30%.</p>
      
      <p><strong>Ignoring Professional Installation:</strong> Improper wiring, inadequate grounding, and poor battery ventilation cause 60% of system failures in Nigeria. Professional installation costs ₦200,000-500,000 but prevents ₦2-3 million in damage.</p>
      
      <p><strong>Neglecting Maintenance Contracts:</strong> Solar panels require quarterly cleaning (dust reduces efficiency 15-25% in harmattan season). Battery banks need monthly voltage checks. Comprehensive SLAs cost ₦150,000-300,000 annually but extend system life 30-40%.</p>
      
      <h3>ROI Calculation: Solar vs Generator</h3>
      <p>A typical 10kVA generator consumes 2-3 liters/hour at ₦900/liter. Running 8 hours daily costs ₦14,400-21,600 daily (₦5.3-7.9 million annually). Add maintenance (₦800,000/year) and replacement every 3-4 years (₦2-3 million).</p>
      
      <p>A 10kW solar system costing ₦9 million pays for itself in 18-24 months through eliminated diesel costs, then generates free power for 20-25 years. With financing options, monthly payments (₦400,000-500,000) often cost less than current generator spending.</p>
      
      <h3>Getting Started</h3>
      <p>Schedule a power audit with certified engineers. Techville Enterprise provides free site assessments including:</p>
      <ul>
        <li>72-hour consumption monitoring</li>
        <li>Roof structural analysis for panel mounting</li>
        <li>Shading studies and optimal panel placement</li>
        <li>Customized system design with 3D modeling</li>
        <li>Detailed ROI projections with financing options</li>
      </ul>
      
      <p><strong>Contact us:</strong> +234 816 206 2958 | techvilleenterprises@gmail.com</p>
      
      <p style="margin-top: 30px; padding: 20px; background-color: #1a2332; border-left: 4px solid #0866ff;">
        <strong>Bottom Line:</strong> The right solar system eliminates downtime, cuts energy costs 70-85%, and increases property value. With current diesel prices, the question isn't whether you can afford solar—it's whether you can afford to keep burning diesel.
      </p>
    `,
  },
  {
    slug: "ict-setup-cost-schools-nigeria-2025",
    title: "Complete ICT Setup Cost for Schools in Nigeria (2025 Breakdown)",
    category: "ICT INFRASTRUCTURE",
    author: "Techville Solutions Team",
    date: "November 12, 2025",
    excerpt:
      "Detailed pricing guide for computer labs, servers, networking equipment, and power backup systems. Learn what 50-200 student institutions actually spend on complete digital infrastructure...",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200",
    content: `
      <h2>The Real Cost of ICT Infrastructure in Nigerian Schools</h2>
      <p>Every school administrator faces the same question: "What does it actually cost to set up a functional computer lab that won't fail within two years?" This comprehensive breakdown provides exact figures based on 150+ school deployments completed by Techville Enterprise across Nigeria in 2024-2025.</p>
      
      <h3>Small School Setup (50-100 Students)</h3>
      <p><strong>Computer Lab: ₦3.8 - 5.2 Million</strong></p>
      <ul>
        <li>15 Desktop Computers (Core i3/4GB RAM): ₦2,100,000 - 2,700,000</li>
        <li>15 Student Desks + Chairs: ₦450,000 - 600,000</li>
        <li>1 Teacher Workstation (Core i5/8GB RAM): ₦180,000 - 220,000</li>
        <li>1 Network Switch (24-port): ₦85,000 - 120,000</li>
        <li>Structured Cabling + Installation: ₦350,000 - 450,000</li>
        <li>1 Laser Printer (Network): ₦220,000 - 280,000</li>
        <li>Whiteboard + Projector: ₦280,000 - 350,000</li>
        <li>Software Licensing (Windows + Office): ₦135,000 - 180,000</li>
      </ul>
      
      <p><strong>Power Backup: ₦4.5 - 6 Million</strong></p>
      <ul>
        <li>5kW Solar System: ₦3,200,000 - 4,000,000</li>
        <li>10kWh Battery Bank (Lithium): ₦1,100,000 - 1,600,000</li>
        <li>Installation + Wiring: ₦200,000 - 400,000</li>
      </ul>
      
      <p><strong>Total Investment: ₦8.3 - 11.2 Million</strong></p>
      
      <h3>Medium School Setup (100-200 Students)</h3>
      <p><strong>Computer Lab: ₦7.5 - 10 Million</strong></p>
      <ul>
        <li>30 Desktop Computers (Core i5/8GB RAM): ₦4,800,000 - 6,300,000</li>
        <li>30 Student Workstations: ₦850,000 - 1,100,000</li>
        <li>2 Teacher Workstations: ₦400,000 - 500,000</li>
        <li>1 Dedicated Server (for school management system): ₦450,000 - 650,000</li>
        <li>2 Network Switches (48-port): ₦250,000 - 350,000</li>
        <li>Structured Cabling + Installation: ₦600,000 - 800,000</li>
        <li>2 Laser Printers: ₦450,000 - 600,000</li>
      </ul>
      
      <p><strong>Power Backup: ₦8 - 11 Million</strong></p>
      <ul>
        <li>10kW Solar System: ₦5,500,000 - 7,000,000</li>
        <li>20kWh Battery Bank: ₦2,200,000 - 3,500,000</li>
        <li>Professional Installation: ₦300,000 - 500,000</li>
      </ul>
      
      <p><strong>Internet Connectivity: ₦800,000 - 1.2 Million (Annual)</strong></p>
      <ul>
        <li>Dedicated Fiber (20-50 Mbps): ₦60,000 - 90,000/month</li>
        <li>Backup 4G/5G Router: ₦80,000 - 120,000 (one-time)</li>
      </ul>
      
      <p><strong>Total Investment: ₦16.3 - 22.2 Million</strong></p>
      
      <h3>Large School/College Setup (200+ Students)</h3>
      <p><strong>Multiple Computer Labs: ₦15 - 22 Million</strong></p>
      <ul>
        <li>60+ Computers (Core i5/i7, 8-16GB RAM): ₦10,000,000 - 14,000,000</li>
        <li>Complete Lab Furniture: ₦1,800,000 - 2,500,000</li>
        <li>5 Teacher/Admin Workstations: ₦1,000,000 - 1,300,000</li>
        <li>2 Dedicated Servers (AD + LMS): ₦1,200,000 - 1,800,000</li>
        <li>Enterprise Networking Equipment: ₦1,000,000 - 1,500,000</li>
      </ul>
      
      <p><strong>Power Infrastructure: ₦15 - 20 Million</strong></p>
      <ul>
        <li>20kW Solar Array: ₦10,000,000 - 13,000,000</li>
        <li>40kWh Battery System: ₦4,500,000 - 6,000,000</li>
        <li>Professional Installation + Monitoring: ₦500,000 - 1,000,000</li>
      </ul>
      
      <p><strong>Total Investment: ₦30 - 42 Million</strong></p>
      
      <h3>Hidden Costs Most Schools Miss</h3>
      <p><strong>Air Conditioning:</strong> Computer labs generate significant heat. Budget ₦400,000-800,000 for cooling systems (2-4 units) plus ₦80,000-150,000 monthly electricity costs if not solar-powered.</p>
      
      <p><strong>Security Systems:</strong> ICT equipment is theft-prone. Budget ₦300,000-600,000 for CCTV, alarms, and secure door access controls.</p>
      
      <p><strong>Annual Maintenance:</strong> Expect 8-12% of hardware costs annually (₦300,000-1,200,000 depending on lab size) for repairs, cleaning, software updates, and component replacements.</p>
      
      <p><strong>Staff Training:</strong> Teachers need ICT proficiency training. Budget ₦200,000-500,000 annually for workshops and certification programs.</p>
      
      <h3>Financing Options for Nigerian Schools</h3>
      <p>Most schools cannot pay ₦15-30 million upfront. Consider these options:</p>
      <ul>
        <li><strong>Bank Education Loans:</strong> 12-24 month payment plans at 18-24% interest</li>
        <li><strong>Techville Flexible Payment:</strong> 12-18 month installment plans with 30% deposit</li>
        <li><strong>Government Programs:</strong> UBEC ICT intervention funds (available to qualifying public schools)</li>
        <li><strong>Partnership Models:</strong> Revenue-sharing arrangements where ICT centers generate income through weekend training programs</li>
      </ul>
      
      <h3>Cost-Saving Strategies Without Compromising Quality</h3>
      <p><strong>Phased Deployment:</strong> Start with 15-20 computers, add more as enrollment and revenue increase.</p>
      
      <p><strong>Hybrid Approach:</strong> Mix new computers for students with refurbished enterprise-grade systems for administrative tasks (saves 30-40%).</p>
      
      <p><strong>Solar-First Investment:</strong> Install power infrastructure before IT equipment. Unreliable power destroys computers—we've seen schools lose ₦2-3 million in equipment within 18 months due to power surges.</p>
      
      <h3>ROI for Schools</h3>
      <p>A functional ICT lab increases school fees by ₦15,000-30,000 per student annually (parents willingly pay for quality digital education). For a 100-student school:</p>
      <ul>
        <li>Additional Revenue: ₦1.5 - 3 million annually</li>
        <li>Weekend Training Programs: ₦500,000 - 1.2 million annually</li>
        <li>Government ICT Certifications: ₦300,000 - 600,000 annually</li>
      </ul>
      <p><strong>Total New Revenue: ₦2.3 - 4.8 Million/Year</strong></p>
      
      <p>A ₦15 million investment pays for itself in 3-4 years while dramatically improving educational outcomes and school reputation.</p>
      
      <h3>Get a Custom Quote for Your School</h3>
      <p>Every school's needs differ based on student population, curriculum requirements, and existing infrastructure. Techville Enterprise provides:</p>
      <ul>
        <li>Free on-site assessment and space planning</li>
        <li>Customized equipment recommendations based on budget</li>
        <li>Detailed 3-5 year total cost of ownership analysis</li>
        <li>Flexible payment plans with 12-18 month terms</li>
        <li>Comprehensive warranty and maintenance SLAs</li>
      </ul>
      
      <p><strong>Schedule Your Free Consultation:</strong> +234 816 206 2958 | techvilleenterprises@gmail.com</p>
      
      <p style="margin-top: 30px; padding: 20px; background-color: #1a2332; border-left: 4px solid #0866ff;">
        <strong>Key Takeaway:</strong> A quality ICT setup costs ₦8-42 million depending on school size, but generates ₦2-5 million in additional annual revenue while transforming educational outcomes. The real question isn't cost—it's which schools get digital infrastructure first and capture competitive advantage.
      </p>
    `,
  },
  {
    slug: "signs-business-needs-hybrid-power-solution",
    title:
      "5 Signs Your Business Needs a Hybrid Power Solution (Not Just Generators)",
    category: "BUSINESS CONTINUITY",
    author: "Techville Technical Team",
    date: "November 8, 2025",
    excerpt:
      "Is your diesel generator costing more than solar? Learn the warning signs that indicate it's time to switch to hybrid ICT-solar infrastructure for reliable, cost-effective business operations...",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600",
    content: `
      <h2>When Generators Become Your Biggest Expense</h2>
      <p>If you're running a business in Nigeria, you know the generator drill: NEPA fails at 11 AM, someone rushes to start the generator, it sputters for 30 seconds (panic sets in), then finally roars to life. Repeat this 3-5 times daily. Your "backup power" has become your primary power source, and the costs are silently destroying your profit margins.</p>
      
      <p>Here are five undeniable signs that your business needs to transition from diesel dependency to hybrid ICT-solar infrastructure immediately:</p>
      
      <h3>1. Your Monthly Diesel Bill Exceeds ₦500,000</h3>
      <p><strong>The Math That Should Terrify You:</strong></p>
      <ul>
        <li>10kVA generator: 2.5 liters/hour consumption</li>
        <li>Running 8 hours daily: 20 liters daily × ₦900/liter = ₦18,000/day</li>
        <li>Monthly cost: ₦540,000 (₦6.5 million annually)</li>
        <li>Over 3 years: ₦19.5 million burned as diesel smoke</li>
      </ul>
      
      <p>A ₦9-12 million solar-hybrid system eliminates 80-90% of diesel consumption and pays for itself in 18-24 months. After that? You're generating free power for 20-25 years.</p>
      
      <p><strong>Real Example:</strong> A Lagos pharmaceutical company was spending ₦800,000 monthly on diesel. After installing a 15kW hybrid system (₦12 million investment), their diesel costs dropped to ₦120,000/month. They recovered the entire investment in 21 months. Five years later, they've saved ₦38 million.</p>
      
      <h3>2. You've Replaced Your Generator Twice in 5 Years</h3>
      <p>Generators designed for "backup" use (4-6 hours weekly) fail catastrophically when forced to run 8-12 hours daily. Manufacturers rate most commercial generators for 2,000-3,000 operating hours before major overhaul. Running 8 hours daily means you hit that limit in 12-15 months.</p>
      
      <p><strong>Hidden Generator Costs Nobody Mentions:</strong></p>
      <ul>
        <li>Complete replacement every 3-4 years: ₦2-4 million</li>
        <li>Engine overhaul (every 18 months): ₦600,000-900,000</li>
        <li>Monthly maintenance (oil, filters, spark plugs): ₦45,000-80,000</li>
        <li>Starter motor replacements: ₦150,000-250,000 every 2 years</li>
        <li>Battery replacements: ₦85,000-120,000 every 18 months</li>
      </ul>
      
      <p>Meanwhile, solar panels carry 25-year warranties and have zero moving parts. Inverters last 10-15 years. Lithium batteries deliver 3,000-5,000 cycles (8-12 years of daily use).</p>
      
      <h3>3. Your IT Equipment Fails More Than Industry Average</h3>
      <p>This is the cost nobody calculates correctly. Diesel generators produce "dirty power"—voltage fluctuations, frequency instability, and harmonic distortion that slowly destroys sensitive electronics.</p>
      
      <p><strong>Equipment Damage Symptoms:</strong></p>
      <ul>
        <li>Computers dying after 2-3 years instead of 5-7 years</li>
        <li>Server crashes during generator transitions (grid to generator or generator to grid)</li>
        <li>Printers, scanners, and networking equipment failing prematurely</li>
        <li>UPS units burning out despite being "protected"</li>
        <li>Hard drives failing at alarming rates (voltage spikes during power transitions)</li>
      </ul>
      
      <p>A 30-workstation office losing 5 computers prematurely costs ₦800,000-1,200,000. Factor in lost productivity, data recovery, and replacement urgency, and you're looking at ₦1.5-2 million in hidden annual losses.</p>
      
      <p>Hybrid solar systems with pure sine wave inverters deliver hospital-grade clean power. Zero fluctuations. Zero harmonics. Your IT equipment lasts its full rated lifespan.</p>
      
      <h3>4. Employees Complain About Noise and Fumes</h3>
      <p>This isn't just comfort—it's productivity and health.</p>
      
      <p>Typical 10kVA generator: 85-95 decibels (equivalent to standing next to a motorcycle). OSHA guidelines recommend limiting exposure above 85 dB to 8 hours maximum. Your employees endure this 8-10 hours daily.</p>
      
      <p><strong>Documented Health Impacts:</strong></p>
      <ul>
        <li>Increased stress hormones (cortisol) reducing cognitive function 15-20%</li>
        <li>Chronic headaches reported by 40-60% of employees in generator-dependent offices</li>
        <li>Carbon monoxide exposure (even outdoor generators leak CO into poorly ventilated offices)</li>
        <li>Sleep disruption for businesses operating evening/night shifts</li>
      </ul>
      
      <p>Hybrid solar systems are completely silent. No vibration. No exhaust fumes. No CO poisoning risk. Employees work in environments comparable to corporate offices with reliable grid power.</p>
      
      <p><strong>Productivity Impact:</strong> Studies show noise pollution reduces workplace productivity by 12-18%. For a ₦15 million annual payroll, that's ₦1.8-2.7 million in lost productive output annually.</p>
      
      <h3>5. You Can't Scale Operations Because Power Infrastructure Won't Support It</h3>
      <p>This is the strategic failure point. You want to:</p>
      <ul>
        <li>Add 10 more workstations (requires additional 3-4kW capacity)</li>
        <li>Install server room with 24/7 cooling (needs 5-8kW continuous load)</li>
        <li>Open evening shift operations (doubling generator runtime and costs)</li>
        <li>Deploy manufacturing equipment or medical devices requiring stable power</li>
      </ul>
      
      <p>But your 10kVA generator is already maxed out, and upgrading to a 20kVA generator means:</p>
      <ul>
        <li>₦3.5-5 million new generator purchase</li>
        <li>Diesel consumption doubles (₦1+ million monthly)</li>
        <li>Noise and maintenance problems multiply</li>
      </ul>
      
      <p>Hybrid solar systems scale elegantly. Add 5kW of panels (₦1.2-1.5 million) and 10kWh battery capacity (₦1.1-1.4 million), and you've expanded 50% for ₦2.5-3 million—with zero increase in operating costs.</p>
      
      <h3>What "Hybrid" Actually Means</h3>
      <p>Many business owners think "hybrid" means adding a small solar panel to their existing generator setup. That's not infrastructure—that's a band-aid.</p>
      
      <p><strong>True hybrid power infrastructure integrates:</strong></p>
      <ul>
        <li><strong>Solar array:</strong> Primary daytime power generation</li>
        <li><strong>Battery banks:</strong> Energy storage for 12-18 hours of autonomy</li>
        <li><strong>Grid connection:</strong> Secondary charging when available</li>
        <li><strong>Generator backup:</strong> Tertiary failsafe for extended outages (but running 90% less)</li>
        <li><strong>Smart inverters:</strong> Automatic load management and seamless switching</li>
      </ul>
      
      <p>Result: Your generator runs less than 2 hours weekly instead of 8-10 hours daily. Diesel costs drop 85-95%. Equipment lasts 2-3x longer. Operations run 24/7 with zero downtime anxiety.</p>
      
      <h3>The Transition Process</h3>
      <p>Most businesses fear the disruption. "We can't shut down for three days while you install solar." You don't have to.</p>
      
      <p><strong>Techville's Zero-Downtime Deployment:</strong></p>
      <ol>
        <li><strong>Day 1-2:</strong> Solar panel installation on roof (business operates normally on existing generator)</li>
        <li><strong>Day 3-4:</strong> Battery bank and inverter installation in designated room (no power disruption)</li>
        <li><strong>Day 5:</strong> Integration and testing during non-peak hours (typically 6-9 PM)</li>
        <li><strong>Day 6:</strong> Cutover happens at night—you arrive Monday morning to silent, solar-powered operations</li>
      </ol>
      
      <h3>Cost Comparison: 5-Year Total Cost of Ownership</h3>
      
      <table style="width: 100%; margin: 20px 0; border-collapse: collapse;">
        <tr style="background-color: #1a2332;">
          <th style="padding: 12px; text-align: left; border: 1px solid #333;">Expense Category</th>
          <th style="padding: 12px; text-align: left; border: 1px solid #333;">Generator-Only</th>
          <th style="padding: 12px; text-align: left; border: 1px solid #333;">Hybrid Solar</th>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #333;">Initial Investment</td>
          <td style="padding: 12px; border: 1px solid #333;">₦2.5M (10kVA generator)</td>
          <td style="padding: 12px; border: 1px solid #333;">₦9M (10kW solar + batteries)</td>
        </tr>
        <tr style="background-color: #1a2332;">
          <td style="padding: 12px; border: 1px solid #333;">Diesel (5 years)</td>
          <td style="padding: 12px; border: 1px solid #333;">₦32.5M</td>
          <td style="padding: 12px; border: 1px solid #333;">₦4M</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #333;">Maintenance (5 years)</td>
          <td style="padding: 12px; border: 1px solid #333;">₦4M</td>
          <td style="padding: 12px; border: 1px solid #333;">₦800K</td>
        </tr>
        <tr style="background-color: #1a2332;">
          <td style="padding: 12px; border: 1px solid #333;">Replacement/Overhaul</td>
          <td style="padding: 12px; border: 1px solid #333;">₦2.5M (replacement at year 4)</td>
          <td style="padding: 12px; border: 1px solid #333;">₦0</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #333;"><strong>5-Year Total</strong></td>
          <td style="padding: 12px; border: 1px solid #333;"><strong>₦41.5M</strong></td>
          <td style="padding: 12px; border: 1px solid #333;"><strong>₦13.8M</strong></td>
        </tr>
      </table>
      
      <p><strong>Savings Over 5 Years: ₦27.7 Million</strong></p>
      
      <h3>Ready to Eliminate Your Diesel Dependency?</h3>
      <p>If three or more of these warning signs apply to your business, you're already losing money daily. The transition to hybrid solar isn't an expense—it's eliminating an ongoing expense that compounds annually.</p>
      
      <p><strong>Techville Enterprise Assessment Includes:</strong></p>
      <ul>
        <li>72-hour power consumption monitoring at your facility</li>
        <li>Current vs. projected 5-year cost analysis</li>
        <li>Custom hybrid system design with ROI projections</li>
        <li>Financing options and payment plans</li>
        <li>Zero-downtime deployment timeline</li>
      </ul>
      
      <p><strong>Schedule Your Free Power Audit:</strong> +234 816 206 2958 | techvilleenterprises@gmail.com</p>
      
      <p style="margin-top: 30px; padding: 20px; background-color: #1a2332; border-left: 4px solid #0866ff;">
        <strong>The Bottom Line:</strong> Every month you delay costs your business ₦400,000-800,000 in unnecessary diesel expenses. A hybrid solar system isn't a luxury—it's the only logical infrastructure decision for any serious Nigerian business. The question is whether you make the switch this quarter or keep burning cash (literally) for another year.
      </p>
    `,
  },
];

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a1525]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/background-img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-[#0866ff] text-white text-xs font-semibold px-4 py-2 rounded uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm mb-8">
            <div className="flex items-center gap-2">
              <FaUser className="text-[#0866ff]" />
              <span className="text-[#0866ff] font-medium">{post.author}</span>
            </div>
            <span className="text-gray-500">•</span>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-gray-400" />
              <span className="text-gray-400">{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative pb-12">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden max-w-5xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                color: "#9ca3af",
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
