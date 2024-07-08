import { TERMS } from '@/utils/Contants'
import React from 'react'
import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ['latin'] })

export default function Terms() {

    React.useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, [])
    return (
        <div className={`w-full mt-20 px-20 max-md:px-10 max-sm:px-5 pb-20 ${mulish.className}`}>
            <div class="relative w-full mt-10 ">
                <div class="absolute inset-0 bg-gradient-to-b from-[#3CE8B5] to-[#FFFFFF] opacity-5"></div>
                <div class="relative">
                    <h1 className='text-[4.5vw] font-bold text-[#3CE8B5] w-full text-center'>Terms of Use & Privacy Policy</h1>
                </div>
            </div>
            <div className='p-5'>
                <h1>Reclaim - Terms of Use</h1>
                <br />
                <p><strong>Effective Date: [5th June, 2024]</strong></p>
                <br />
                <br />
                <p>If you have any questions or concerns about these terms, please contact us at <a href="mailto:hello@getreclaim.app">hello@getreclaim.app</a>.</p>

                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing and using Reclaim, you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, you must not use our services.</p>
                </section>
                <br />

                <section>
                    <h2>2. Changes to Terms</h2>
                    <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of Reclaim signifies your acceptance of the updated terms.</p>
                </section>
                <br />

                <section>
                    <h2>3. Eligibility</h2>
                    <p>You must be at least 13 years old to use Reclaim. By using Reclaim, you represent and warrant that you meet this age requirement.</p>
                </section>
                <br />

                <section>
                    <h2>4. Account Registration</h2>
                    <p>To access certain features of Reclaim, you may need to register for an account. You agree to provide accurate information and keep it updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
                </section>
                <br />

                <section>
                    <h2>5. Use of Services</h2>
                    <p>You agree to use Reclaim only for lawful purposes. You must not:</p>
                    <ul>
                        <li>Violate any applicable laws.</li>
                        <li>Infringe on the rights of others.</li>
                        <li>Disrupt or interfere with the security or functionality of Reclaim.</li>
                        <li>Attempt unauthorized access to our systems or other users' accounts.</li>
                    </ul>
                </section>
                <br />

                <section>
                    <h2>6. User Content</h2>
                    <p>You retain ownership of any content you submit, post, or display on Reclaim. By providing content, you grant Reclaim a non-exclusive, worldwide, royalty-free license to use, copy, modify, and display such content in connection with the services.</p>
                </section>
                <br />

                <section>
                    <h2>7. Intellectual Property</h2>
                    <p>All intellectual property rights in Reclaim, including but not limited to software, text, graphics, and logos, are owned by Reclaim or our licensors. You may not use, reproduce, or distribute any part of Reclaim without our prior written permission.</p>
                </section>
                <br />

                <section>
                    <h2>8. Subscription and Fees</h2>
                    <p>Reclaim is currently free to use. We reserve the right to introduce subscription plans or fees for certain features in the future, with prior notice to users.</p>
                </section>
                <br />

                <section>
                    <h2>9. Privacy</h2>
                    <p>Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal data.</p>
                </section>
                <br />

                <section>
                    <h2>10. Termination</h2>
                    <p>We may suspend or terminate your access to Reclaim at any time, with or without cause and with or without notice.</p>
                </section>
                <br />

                <section>
                    <h2>11. Disclaimers</h2>
                    <p>Reclaim is provided "as is" without warranties of any kind. We disclaim all warranties, whether express or implied, including but not limited to merchantability and fitness for a particular purpose.</p>
                </section>
                <br />

                <section>
                    <h2>12. Limitation of Liability</h2>
                    <p>Reclaim will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the services.</p>
                </section>
                <br />

                <section>
                    <h2>13. Indemnification</h2>
                    <p>You agree to indemnify and hold harmless Reclaim and its affiliates from any claims arising out of your use of the services or violation of these terms.</p>
                </section>
                <br />

                <section>
                    <h2>14. Governing Law</h2>
                    <p>These terms are governed by the laws of New Delhi, India, and applicable laws of the United States.</p>
                </section>
                <br />

                <section>
                    <h2>15. Dispute Resolution</h2>
                    <p>Any disputes arising from these terms or your use of Reclaim will be resolved through binding arbitration in accordance with the Indian Arbitration and Conciliation Act, 1996, conducted in New Delhi, India.</p>
                </section>
                <br />

                <section>
                    <h2>16. Entire Agreement</h2>
                    <p>These terms constitute the entire agreement between you and Reclaim regarding the use of the services.</p>
                </section>
                <br />

                <section>
                    <h2>17. Contact Information</h2>
                    <p>If you have any questions or concerns about these terms, please contact us at <a href="mailto:hello@getreclaim.app">hello@getreclaim.app</a>.</p>
                </section>
            </div>

            <div className='p-5'>
                <h1>Reclaim - Privacy Policy</h1>
                <br />
                <p><strong>Effective Date: [5th June, 2024]</strong></p>
                <br />
                <br />
                <section>
                    <h2>1. Introduction</h2>
                    <p>At Reclaim, we prioritize your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information.</p>
                </section>
                <br />


                <section>
                    <h2>2. Information We Collect</h2>
                    <p>- Personal Information: Information that can be used to identify you, such as your name, email address, and phone number.</p>
                    <p>- Usage Data: Information about your interactions with our app, including device information, IP address, and usage patterns.</p>
                </section>
                <br />


                <section>
                    <h2>3. How We Use Your Information</h2>
                    <p>- To Provide and Improve Services: We use your data to operate and enhance Reclaim.</p>
                    <p>- Communication: We may use your contact information to send you updates and support messages.</p>
                    <p>- Analytics: To analyze usage patterns and improve our services.</p>
                </section>
                <br />


                <section>
                    <h2>4. Data Sharing and Disclosure</h2>
                    <p>We do not share your personal information with third parties except:</p>
                    <ul>
                        <li>- With Your Consent: When you have given us explicit permission.</li>
                        <li>- Legal Requirements: To comply with legal obligations.</li>
                        <li>- Service Providers: With third-party vendors who help us operate and improve our services, under strict confidentiality agreements.</li>
                    </ul>
                </section>
                <br />


                <section>
                    <h2>5. Data Security</h2>
                    <p>We implement robust security measures to protect your data against unauthorized access, alteration, or destruction.</p>
                </section>
                <br />


                <section>
                    <h2>6. Your Rights</h2>
                    <p>- Access and Update: You can access and update your personal information through your account settings.</p>
                    <p>- Data Deletion: You can request the deletion of your personal information by contacting us at <a href="mailto:hello@getreclaim.app">hello@getreclaim.app</a>.</p>
                    <p>- Opt-Out: You can opt-out of certain data collection practices.</p>
                </section>
                <br />


                <section>
                    <h2>7. Children's Privacy</h2>
                    <p>Reclaim does not knowingly collect personal data from children under 13. If you believe we have inadvertently collected such data, please contact us to delete it.</p>
                </section>
                <br />


                <section>
                    <h2>8. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our app.</p>
                </section>
                <br />


                <section>
                    <h2>9. Contact Us</h2>
                    <p>For any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:hello@getreclaim.app">hello@getreclaim.app</a>.</p>
                    <p>If you have any questions or concerns about these terms, please contact us at <a href="mailto:hello@getreclaim.app">hello@getreclaim.app</a>.</p>

                </section>
                <br />

            </div>
        </div>
    )
}
