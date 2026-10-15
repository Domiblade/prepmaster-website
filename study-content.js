window.PrepMasterStudyContent = {
    "revisionSheets":  [
                           {
                               "id":  "phy_01",
                               "title":  "Mathematical Tools \u0026 Vectors",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Dot product A·B = AB cos θ (Scalar work, projection of A on B = (A·B)/B).\n• Cross product A×B = AB sin θ n̂ (Right hand screw rule, Torque \u0026 Angular momentum).\n• Small angle approximations: sin θ ≈ θ, cos θ ≈ 1 - θ²/2, tan θ ≈ θ (for θ \u003c\u003c 1 in radians).\n• Derivatives for instantaneous rates; Integrals as area under curve.",
                               "formulas":  "1. Resultant: R = √(A² + B² + 2AB cos θ)\n2. Direction: tan α = (B sin θ) / (A + B cos θ)\n3. Unit vector: â = A / |A|\n4. Area of parallelogram = |A × B|, Triangle = ½|A × B|\n5. Derivative: d/dx(xⁿ) = n xⁿ⁻¹, d/dx(sin x) = cos x",
                               "tips":  "Orthogonality test: If A·B = 0, vectors are perpendicular. Collinearity test: A × B = 0 or A = k B. Projection of vector A along B is (A·B) / |B|."
                           },
                           {
                               "id":  "phy_02",
                               "title":  "Units, Dimensions \u0026 Errors",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Principle of Homogeneity: Only physical quantities of the same dimensions can be added or subtracted.\n• Vernier Least Count = 1 MSD - 1 VSD = (1 - n/m) MSD.\n• Screw gauge Least Count = Pitch / Total Circular Divisions.\n• Fractional error propagation: if Z = Aᵃ Bᵇ / Cᶜ, ΔZ/Z = a(ΔA/A) + b(ΔB/B) + c(ΔC/C).",
                               "formulas":  "1. Absolute Error = |Measured - True|\n2. Relative Error = Δa_mean / a_mean\n3. Percentage Error = (Δa_mean / a_mean) × 100%\n4. Vernier Total Reading = MSR + (VSR × LC)\n5. Screw Gauge TR = PSR + (CSR × LC) - Zero Error",
                               "tips":  "Always ADD fractional errors in product and quotients; powers multiply the error percentage. Never subtract errors even if denominator has negative exponent."
                           },
                           {
                               "id":  "phy_03",
                               "title":  "Motion in a Straight Line (1D)",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Distance ≥ |Displacement|; Average speed ≥ |Average velocity|.\n• Slope of x-t graph = velocity; Slope of v-t graph = acceleration.\n• Area under v-t graph = displacement; Area under a-t graph = change in velocity.\n• Galileo\u0027s ratio of odd numbers: S₁ : S₂ : S₃ = 1 : 3 : 5 for motion from rest under constant acceleration.",
                               "formulas":  "1. v = u + at\n2. s = ut + ½ at²\n3. v² = u² + 2as\n4. Distance in n-th second: sₙ = u + a/2 (2n - 1)\n5. Average velocity for const acceleration: v_avg = (u + v) / 2",
                               "tips":  "For a particle dropped from height H, velocity at ground is √(2gH). If dropped from rest, distance fallen in 1st, 2nd, 3rd seconds is in ratio 1:3:5."
                           },
                           {
                               "id":  "phy_04",
                               "title":  "Motion in a Plane \u0026 Projectiles",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Horizontal and vertical motions are strictly independent under gravity.\n• Horizontal velocity u_x = u cos θ remains constant throughout projectile flight.\n• Vertical motion has uniform acceleration a_y = -g.\n• Complementary angles (θ and 90° - θ) yield identical horizontal ranges R.",
                               "formulas":  "1. Time of Flight: T = (2u sin θ) / g\n2. Maximum Height: H_max = (u² sin² θ) / (2g)\n3. Range: R = (u² sin 2θ) / g\n4. Trajectory equation: y = x tan θ [1 - x/R]\n5. Relation between H and R: R tan θ = 4H",
                               "tips":  "Remember R tan θ = 4H. If maximum range is R_max = u²/g at 45°, then H at 45° is R_max / 4. For shortest path in river-boat: sin θ = v_r / v_b."
                           },
                           {
                               "id":  "phy_05",
                               "title":  "Newton\u0027s Laws of Motion \u0026 Friction",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• F_net = dp/dt = m(dv/dt) + v(dm/dt) (for variable mass like rocket propulsion).\n• Free Body Diagrams (FBD): Include all external contact forces and field forces (gravity).\n• Static friction is self-adjusting: 0 ≤ f_s ≤ μ_s N. Kinetic friction f_k = μ_k N.\n• Pulley constraint virtual work: Σ (T · a) = 0 and Σ (T · x) = 0.",
                               "formulas":  "1. Rocket propulsion thrust: F = v_rel (-dm/dt)\n2. Two blocks on friction: a_max = μ_s g (lower block driven by friction alone)\n3. Angle of repose: tan φ = μ_s\n4. Banking with friction: v_max = √[rg (tan θ + μ) / (1 - μ tan θ)]\n5. Pseudo force in non-inertial frame: F_pseudo = -m a_frame",
                               "tips":  "In multi-pulley systems, write tension T on each rope segment. Block acceleration is inversely proportional to rope tension coeff (a ∝ 1/Σ T)."
                           },
                           {
                               "id":  "phy_06",
                               "title":  "Work, Energy \u0026 Power",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Work-Energy Theorem: W_all forces (conservative + non-conservative + external) = ΔK.\n• Conservative force: F = -dU/dx, curl F = 0; work done is independent of path.\n• Equilibrium points: dU/dx = 0; Stable if d²U/dx² \u003e 0 (minimum U); Unstable if d²U/dx² \u003c 0.\n• Vertical Circular Motion: Min velocity at bottom for full loop = √(5gl); at top = √(gl).",
                               "formulas":  "1. Work: W = ∫ F · dr = F d cos θ\n2. Spring potential energy: U = ½ k x²\n3. Power: P = dW/dt = F · v\n4. Tension in vertical circle at bottom: T_bot = mg + m v²/l\n5. Velocity at height h: v = √(u² - 2gh)",
                               "tips":  "Vertical circle critical velocities: Bottom v ≥ √(5gr) to complete loop. If √(2gr) \u003c u \u003c √(5gr), string slackens before top and particle behaves as projectile."
                           },
                           {
                               "id":  "phy_07",
                               "title":  "Centre of Mass \u0026 Momentum",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• If external force F_ext = 0, velocity of COM is constant and total linear momentum is conserved.\n• Removed mass cavity problems: X_com = (M₁ X₁ - M₂ X₂) / (M₁ - M₂).\n• Coefficient of restitution: e = (v₂ - v₁) / (u₁ - u₂); e = 1 (elastic), e = 0 (inelastic).\n• In perfectly inelastic collision (e=0), bodies stick together with maximum kinetic energy loss.",
                               "formulas":  "1. R_com = (Σ mᵢ rᵢ) / (Σ mᵢ) = ∫ r dm / ∫ dm\n2. Elastic 1D collision final velocity: v₁ = [(m₁ - m₂) u₁ + 2 m₂ u₂] / (m₁ + m₂)\n3. Loss of KE in 1D collision: ΔK = ½ [m₁ m₂ / (m₁ + m₂)] (1 - e²) (u₁ - u₂)²\n4. Reduced mass: μ = (m₁ m₂) / (m₁ + m₂)",
                               "tips":  "Equal mass elastic collision: velocities are exchanged completely! (u₁ becomes v₂ and u₂ becomes v₁). In explosion or jump from boat, COM remains unmoved if F_ext = 0."
                           },
                           {
                               "id":  "phy_08",
                               "title":  "Rotational Motion \u0026 Rigid Bodies",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Parallel Axis Theorem: I = I_cm + M d² (d is distance between parallel axes).\n• Perpendicular Axis Theorem (2D laminar bodies only): I_z = I_x + I_y.\n• Pure rolling condition on stationary ground: v_cm = ω R and a_cm = α R.\n• Rolling without slipping on incline: Acceleration a = (g sin θ) / (1 + k²/R²).",
                               "formulas":  "1. Torque: τ = r × F = I α = dL/dt\n2. Angular momentum: L = r × p = I ω\n3. Rolling kinetic energy: K_total = ½ M v_cm² (1 + k²/R²)\n4. Incline rolling accel: a = (g sin θ) / (1 + I_cm / MR²)\n5. Ring: I=MR², Disc: I=½MR², Solid Sphere: I=⅖MR², Hollow Sphere: I=⅔MR²",
                               "tips":  "Order of reaching bottom of incline (fastest to slowest): Solid Sphere \u003e Disc \u003e Hollow Sphere \u003e Ring (smaller k²/R² reaches bottom with higher linear speed)."
                           },
                           {
                               "id":  "phy_09",
                               "title":  "Gravitation",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Kepler\u0027s Laws: 1st Law (Elliptical orbits with Sun at focus); 2nd Law (Equal area in equal time dA/dt = L/(2m) = const); 3rd Law (T² ∝ R³).\n• Variation of g with altitude h: g_h = g (1 - 2h/R) for h \u003c\u003c R; g_h = g / (1 + h/R)² for any h.\n• Variation of g with depth d: g_d = g (1 - d/R).\n• Escape velocity from surface: v_e = √(2GM/R) = √(2gR) ≈ 11.2 km/s.",
                               "formulas":  "1. Gravitational Force: F = G M₁ M₂ / r²\n2. Gravitational Potential: V = -GM / r\n3. Orbital Velocity: v_o = √(GM / r) = √(gR) for near-earth orbit\n4. Relation: v_escape = √2 · v_orbital\n5. Geostationary orbit radius: r ≈ 42,400 km, height h ≈ 36,000 km, T = 24 hrs",
                               "tips":  "Gravitational potential inside a solid uniform sphere at center is -1.5 (GM/R), which is 1.5 times the surface potential! Weightlessness inside a freely falling elevator or orbiting satellite."
                           },
                           {
                               "id":  "phy_10",
                               "title":  "Mechanical Properties of Solids \u0026 Fluids",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Young\u0027s modulus Y = (F/A) / (ΔL/L); Shear modulus η = (F/A) / θ; Bulk modulus B = -ΔP / (ΔV/V).\n• Archimedes Principle: Buoyant force F_B = ρ_fluid V_submerged g.\n• Bernoulli\u0027s Principle: P + ½ ρ v² + ρ g h = Constant along streamline.\n• Torricelli\u0027s Law of efflux: v = √(2gh); Range x = 2 √(h (H - h)).",
                               "formulas":  "1. Elastic energy density: u = ½ × Stress × Strain = ½ Y (Strain)²\n2. Surface tension excess pressure: Droplet ΔP = 2T/R; Soap bubble ΔP = 4T/R\n3. Capillary rise: h = (2T cos θ) / (r ρ g)\n4. Stokes\u0027 Law: F_viscous = 6 π η r v\n5. Terminal velocity: v_t = 2 r² (ρ - σ) g / (9 η)",
                               "tips":  "Maximum horizontal range for efflux from a tank of height H occurs when the orifice is exactly at mid-height h = H/2, giving range x_max = H!"
                           },
                           {
                               "id":  "phy_11",
                               "title":  "Thermal Properties \u0026 Thermodynamics",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• 1st Law of Thermodynamics: ΔQ = ΔU + W (Sign convention: W done by gas is positive; ΔU = n C_v ΔT is universal).\n• Thermodynamic processes: Isothermal (T=const, ΔU=0, W = nRT ln(V₂/V₁)); Adiabatic (PVᵞ = const, ΔQ=0, W = nR(T₁ - T₂)/(γ - 1)).\n• Carnot Engine efficiency: η = 1 - T_cold / T_hot = W / Q_in.\n• Stefan-Boltzmann: E = e σ A T⁴; Newton\u0027s Law of Cooling: -dT/dt = k (T - T_surrounding).",
                               "formulas":  "1. First Law: ΔQ = ΔU + W\n2. Work in Isothermal: W = nRT ln(V₂ / V₁)\n3. Work in Adiabatic: W = (P₁V₁ - P₂V₂) / (γ - 1)\n4. Mayer\u0027s Relation: C_p - C_v = R; γ = C_p / C_v\n5. Wien\u0027s Displacement Law: λ_max · T = b (b = 2.898 × 10⁻³ m K)",
                               "tips":  "On a P-V diagram, slope of adiabatic curve is γ times the slope of isothermal curve! Adiabatic is always steeper (dP/dV)_ad = γ (dP/dV)_iso."
                           },
                           {
                               "id":  "phy_12",
                               "title":  "Kinetic Theory of Gases (KTG)",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Pressure of ideal gas: P = ⅓ ρ v_rms² = ⅓ (m N / V) v_rms².\n• Average translational kinetic energy per molecule = 3/2 k_B T (depends solely on absolute temperature).\n• Equipartition theorem: Energy per degree of freedom per molecule = ½ k_B T.\n• Degrees of freedom f: Monoatomic = 3 (He, Ne, Ar); Diatomic = 5 at room temp (N₂, O₂); Non-linear triatomic = 6 (H₂O, CO₂).",
                               "formulas":  "1. RMS speed: v_rms = √(3RT / M) = √(3k_B T / m)\n2. Average speed: v_avg = √(8RT / πM)\n3. Most probable speed: v_mp = √(2RT / M)\n4. Ratio: v_mp : v_avg : v_rms = √2 : √(8/π) : √3 ≈ 1 : 1.128 : 1.224\n5. C_v = f/2 R, C_p = (f/2 + 1) R, γ = 1 + 2/f",
                               "tips":  "Remember speed hierarchy: v_rms \u003e v_avg \u003e v_mp (Root Mean Square is highest, Most Probable is lowest). Memory trick: RAM (R \u003e A \u003e M)."
                           },
                           {
                               "id":  "phy_13",
                               "title":  "Oscillations (SHM)",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• SHM condition: Acceleration a = -ω² x.\n• Displacement: x = A sin(ωt + φ); Velocity: v = ω √(A² - x²); Acceleration: a = -ω² x.\n• Total Energy E = ½ m ω² A² = Constant (K_max = U_max = ½ m ω² A² at center and extremes).\n• Spring combinations: Series 1/k_eq = 1/k₁ + 1/k₂; Parallel k_eq = k₁ + k₂.",
                               "formulas":  "1. Spring pendulum: T = 2π √(m / k)\n2. Simple pendulum: T = 2π √(L / g)\n3. Physical pendulum: T = 2π √(I / (m g d))\n4. Velocity at displacement x: v = ω √(A² - x²)\n5. Kinetic Energy: K = ½ m ω² (A² - x²); Potential Energy: U = ½ m ω² x²",
                               "tips":  "In SHM, frequency of potential or kinetic energy oscillations is TWICE (2f) the frequency of displacement oscillations! When x = A / √2, K = U = E / 2."
                           },
                           {
                               "id":  "phy_14",
                               "title":  "Waves \u0026 Sound",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Wave equation: y = A sin(kx - ωt + φ) with wave number k = 2π/λ and wave speed v = ω/k = f λ.\n• Transverse wave on string: v = √(T / μ).\n• Standing wave on string / open organ pipe: all harmonics present f_n = n (v / 2L), n = 1, 2, 3...\n• Closed organ pipe (one end closed): only odd harmonics present f_n = (2n - 1) (v / 4L), n = 1, 2, 3...",
                               "formulas":  "1. Speed of sound in gas: v = √(γ P / ρ) = √(γ R T / M)\n2. Beat frequency: f_beat = |f₁ - f₂|\n3. Doppler Effect: f\u0027 = f₀ [(v ± v_observer) / (v ∓ v_source)]\n4. Closed organ pipe harmonics: f₁ = v/(4L), f₃ = 3v/(4L), f₅ = 5v/(4L)\n5. End correction: e ≈ 0.6 r (Open pipe: L_eff = L + 2e; Closed: L_eff = L + e)",
                               "tips":  "Doppler rule: When source and observer approach each other, perceived frequency ALWAYS increases (numerator +, denominator -). When receding, frequency decreases."
                           },
                           {
                               "id":  "phy_15",
                               "title":  "Electrostatics: Field \u0026 Potential",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Coulomb\u0027s Law: F = (1 / 4πε₀) (q₁ q₂ / r²).\n• Electric field E = -dV/dr (direction of E points in direction of steepest decreasing potential).\n• Gauss\u0027s Law: Φ = ∮ E · dA = Q_enclosed / ε₀.\n• Field of infinite wire: E = λ / (2πε₀ r); Infinite sheet: E = σ / (2ε₀); Conducting sheet: E = σ / ε₀.",
                               "formulas":  "1. Potential of point charge: V = q / (4πε₀ r)\n2. Dipole moment: p = q (2a) from -q to +q\n3. Dipole axial field: E_axis = 2kp / r³; Equatorial field: E_eq = kp / r³\n4. Torque on dipole: τ = p × E; Potential energy: U = -p · E\n5. Uniform charged ring on axis: E = (k Q x) / (R² + x²)^(3/2), max at x = R / √2",
                               "tips":  "Inside a hollow or solid conducting shell, electrostatic field E = 0 everywhere and potential V is constant and equal to surface potential V_surface = kQ/R."
                           },
                           {
                               "id":  "phy_16",
                               "title":  "Capacitance \u0026 Dielectrics",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Capacitance of parallel plate: C = ε₀ A / d; with dielectric slab of constant K: C\u0027 = K C₀.\n• Battery connected: V stays constant; Charge increases Q\u0027 = K Q₀; Energy increases U\u0027 = K U₀.\n• Battery disconnected: Q stays constant; Potential decreases V\u0027 = V₀ / K; Energy decreases U\u0027 = U₀ / K.\n• Energy stored: U = ½ C V² = ½ Q V = Q² / (2C); Energy density u = ½ ε₀ E².",
                               "formulas":  "1. Parallel plate capacitance: C = ε₀ A / d\n2. With dielectric t \u003c d: C = ε₀ A / [d - t + t/K]\n3. Series capacitance: 1/C_eq = 1/C₁ + 1/C₂; Parallel: C_eq = C₁ + C₂\n4. Common potential after connecting: V_c = (C₁ V₁ + C₂ V₂) / (C₁ + C₂)\n5. Heat loss on sharing charge: ΔH = ½ [C₁ C₂ / (C₁ + C₂)] (V₁ - V₂)²",
                               "tips":  "Heat loss formula on connecting two capacitors ΔH = ½ [C₁ C₂ / (C₁ + C₂)] (V₁ - V₂)² is mathematically identical to kinetic energy loss in completely inelastic collision!"
                           },
                           {
                               "id":  "phy_17",
                               "title":  "Current Electricity",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Drift velocity: v_d = e E τ / m; Current: I = n A e v_d; Resistivity: ρ = m / (n e² τ).\n• Kirchhoff\u0027s Laws: KCL (Conservation of charge Σ I = 0 at junction); KVL (Conservation of energy Σ ΔV = 0 in loop).\n• Wheatstone Bridge: Balanced when R₁ / R₂ = R₃ / R₄ (no current through galvanometer branch).\n• Potentiometer: Null deflection method draws zero current at balance, giving true EMF.",
                               "formulas":  "1. Ohm\u0027s Law: V = I R, R = ρ L / A\n2. Temperature variation: R_T = R₀ (1 + α ΔT)\n3. Internal resistance: r = R (l₁ / l₂ - 1)\n4. Comparison of EMFs: E₁ / E₂ = l₁ / l₂\n5. Power dissipated: P = V I = I² R = V² / R",
                               "tips":  "Resistor Cube tricks: Body diagonal R_eq = (5/6)R. Face diagonal R_eq = (3/4)R. Edge R_eq = (7/12)R. Always use Nodal Analysis over loop equations for fast solving."
                           },
                           {
                               "id":  "phy_18",
                               "title":  "Moving Charges \u0026 Magnetism",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Lorentz Force: F = q(E + v × B). Magnetic force does ZERO work because F_B is perpendicular to v.\n• Helical path: radius r = (m v_perp) / (q B), Pitch p = v_parallel × T = (2π m v_parallel) / (q B).\n• Biot-Savart Law: dB = (μ₀ / 4π) (I dl × r̂) / r².\n• Ampere\u0027s Circuital Law: ∮ B · dl = μ₀ I_enclosed.",
                               "formulas":  "1. Force on straight wire: F = I (L × B)\n2. Long straight wire: B = μ₀ I / (2π r)\n3. Circular coil at center: B = μ₀ N I / (2R); on axis: B = (μ₀ N I R²) / [2(R² + x²)^(3/2)]\n4. Solenoid: B = μ₀ n I; Toroid: B = μ₀ N I / (2π r)\n5. Force between parallel currents: F/L = (μ₀ I₁ I₂) / (2π d) (Attractive if same direction)",
                               "tips":  "Two like parallel currents ATTRACT each other; unlike parallel currents REPEL each other (opposite of electrostatic charges where likes repel!)."
                           },
                           {
                               "id":  "phy_19",
                               "title":  "Electromagnetic Induction (EMI)",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Faraday\u0027s Law: Induced EMF e = -dΦ_B / dt. Lenz\u0027s law gives polarity opposing change in flux.\n• Motional EMF: e = B v L for straight rod perpendicular to uniform field; e = ½ B ω L² for rotating rod.\n• Self-induction: Φ = L I, e = -L (dI/dt); Mutual induction: Φ₂ = M I₁, e₂ = -M (dI₁/dt).\n• Inductor stores magnetic energy: U_B = ½ L I²; energy density u_B = B² / (2μ₀).",
                               "formulas":  "1. Magnetic flux: Φ = B · A = B A cos θ\n2. Rotating rod EMF: e = ½ B ω L²\n3. Solenoid self-inductance: L = μ₀ n² A l\n4. Growth of current in LR: I(t) = I₀ (1 - e^(-t / τ)) with τ = L / R\n5. Decay of current in LR: I(t) = I₀ e^(-t / τ)",
                               "tips":  "At t = 0 (switch just closed), an unenergized inductor acts as an OPEN CIRCUIT (infinite resistance). At t → ∞ (steady state), it acts as a ZERO-RESISTANCE IDEAL WIRE."
                           },
                           {
                               "id":  "phy_20",
                               "title":  "Alternating Current (AC)",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• RMS values: V_rms = V₀ / √2 ≈ 0.707 V₀; I_rms = I₀ / √2.\n• Reactance: Inductive X_L = ω L (current lags by 90°); Capacitive X_C = 1 / (ω C) (current leads by 90°).\n• Series LCR Impedance: Z = √[R² + (X_L - X_C)²]; phase angle tan φ = (X_L - X_C) / R.\n• Resonance condition: X_L = X_C ⇒ ω₀ = 1 / √(LC). At resonance, Z = R (minimum), I is maximum, cos φ = 1.",
                               "formulas":  "1. Average power: P_avg = V_rms I_rms cos φ\n2. Power factor: cos φ = R / Z\n3. Resonant frequency: f₀ = 1 / (2π √(LC))\n4. Quality factor: Q = ω₀ L / R = (1 / R) √(L / C) = f₀ / Δf\n5. Transformer: V_s / V_p = N_s / N_p = I_p / I_s (for 100% efficiency)",
                               "tips":  "In purely reactive circuits (pure L or pure C), phase angle φ = 90°, cos φ = 0, so average power consumed is ZERO! Current is known as \u0027Wattless Current\u0027."
                           },
                           {
                               "id":  "phy_21",
                               "title":  "Electromagnetic Waves",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Maxwell\u0027s displacement current: I_d = ε₀ (dΦ_E / dt).\n• EM waves are transverse; E and B oscillate in phase mutually perpendicular to direction of wave propagation ĉ = Ê × B̂.\n• Speed of light: c = 1 / √(μ₀ ε₀) = E₀ / B₀ ≈ 3 × 10⁸ m/s.\n• Energy density is shared equally: u_avg = ½ ε₀ E_rms² + B_rms² / (2μ₀) = ε₀ E_rms².",
                               "formulas":  "1. Wave speed: c = E₀ / B₀ = ω / k\n2. Poynting Vector (intensity flux): S = (1 / μ₀) (E × B)\n3. Intensity: I = c u_avg = ½ c ε₀ E₀²\n4. Radiation pressure: P = I / c (complete absorption); P = 2I / c (complete reflection)\n5. Spectrum order: Radio \u003e Micro \u003e IR \u003e Visible \u003e UV \u003e X-ray \u003e Gamma (decreasing λ)",
                               "tips":  "Electromagnetic spectrum wavelength order mnemonic: \u0027Real Men In Velvet Use X-ray Glasses\u0027 (Radio, Micro, Infrared, Visible, Ultraviolet, X-rays, Gamma)."
                           },
                           {
                               "id":  "phy_22",
                               "title":  "Ray Optics \u0026 Optical Instruments",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Snell\u0027s Law: n₁ sin i = n₂ sin r. Total Internal Reflection occurs when i \u003e Critical angle θ_c = sin⁻¹(1/n).\n• Mirror formula: 1/v + 1/u = 1/f; Magnification m = -v/u.\n• Lens Maker\u0027s Formula: 1/f = (n_rel - 1) [1/R₁ - 1/R₂]; Thin lens formula: 1/v - 1/u = 1/f.\n• Prism deviation: δ = i + e - A; Minimum deviation condition: i = e, r₁ = r₂ = A/2, n = sin[(A + δ_m)/2] / sin(A/2).",
                               "formulas":  "1. Critical angle: sin θ_c = n_rarer / n_denser\n2. Apparent depth: d_app = d_real / n\n3. Combined focal length: 1/F = 1/f₁ + 1/f₂ - d / (f₁ f₂)\n4. Astronomical Telescope: m = -f_o / f_e (normal adjustment, length L = f_o + f_e)\n5. Compound Microscope: m = -(v_o / u_o) (D / f_e)",
                               "tips":  "When a convex lens (refractive index 1.5) is immersed in water (1.33), its focal length quadruples (f_water = 4 f_air)! If immersed in liquid with same index, it turns invisible."
                           },
                           {
                               "id":  "phy_23",
                               "title":  "Wave Optics",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Huygens\u0027 Principle: Every wavefront point acts as secondary wavelet source.\n• Coherent sources have constant phase difference. Interference condition: Maxima Δx = n λ; Minima Δx = (2n - 1) λ / 2.\n• Young\u0027s Double Slit Experiment (YDSE): Fringe width β = λ D / d.\n• Single slit diffraction: Minima condition a sin θ = n λ; Central maximum width = 2 λ D / a.",
                               "formulas":  "1. Resultant Intensity: I = I₁ + I₂ + 2√(I₁ I₂) cos φ\n2. If I₁ = I₂ = I₀: I = 4 I₀ cos²(φ / 2)\n3. Max/Min ratio: I_max / I_min = (√I₁ + √I₂)² / (√I₁ - √I₂)² = (a₁ + a₂)² / (a₁ - a₂)²\n4. Fringe shift by thin sheet of thickness t: Δy = (n - 1) t D / d\n5. Brewster\u0027s Law: tan i_p = μ (reflected and refracted rays are mutually perpendicular)",
                               "tips":  "If YDSE apparatus is submerged in water of refractive index μ, fringe width decreases: β\u0027 = β / μ. Fringe spacing does NOT change when central maximum shifts due to glass plate."
                           },
                           {
                               "id":  "phy_24",
                               "title":  "Modern Physics: Dual Nature \u0026 Atoms",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Photoelectric equation: K_max = h ν - Φ₀ = e V_s (Stopping potential V_s depends linearly on frequency, independent of intensity).\n• de Broglie wavelength: λ = h / p = h / √(2mE) = h / √(2m q V).\n• Bohr\u0027s Postulates: Angular momentum quantization L = m v r = n h / (2π).\n• Radius r_n = 0.529 (n² / Z) Å; Velocity v_n = 2.18 × 10⁶ (Z / n) m/s; Energy E_n = -13.6 (Z² / n²) eV.",
                               "formulas":  "1. Photon energy: E = h ν = hc / λ ≈ 12400 / λ(Å) eV\n2. de Broglie for electron: λ = 12.27 / √V Å\n3. Rydberg Formula: 1/λ = R_H Z² [1/n₁² - 1/n₂²]\n4. Spectral series: Lyman (n₁=1, UV), Balmer (n₁=2, Visible), Paschen (n₁=3, IR)\n5. Ionization energy of Hydrogen: 13.6 eV",
                               "tips":  "In Bohr atom, Kinetic Energy K = -E_total and Potential Energy U = 2 E_total = -2K! Total energy is negative of kinetic energy."
                           },
                           {
                               "id":  "phy_25",
                               "title":  "Nuclei \u0026 Semiconductor Electronics",
                               "subject":  "Physics",
                               "exam":  "All Exams",
                               "concepts":  "• Nuclear radius: R = R₀ A^(1/3) with R₀ ≈ 1.2 fm (Nuclear density is independent of mass number A).\n• Mass defect: Δm = [Z m_p + (A - Z) m_n] - M_nucleus; Binding Energy BE = Δm c² = Δm × 931.5 MeV.\n• Radioactive decay: N(t) = N₀ e^(-λt); Half-life T_half = ln 2 / λ = 0.693 / λ.\n• Semiconductors: p-n junction diode forward bias has low resistance; reverse bias has high resistance (Zener diode operates in breakdown as voltage regulator).",
                               "formulas":  "1. Half life: T_half = 0.693 / λ; Mean life: τ = 1 / λ = 1.44 T_half\n2. Activity: A = λ N = A₀ (½)^(t / T_half)\n3. Mass-energy equivalence: 1 amu = 931.5 MeV\n4. Intrinsic semiconductor: n_i² = n_e · n_h\n5. Logic gates: NAND and NOR are universal gates; De Morgan: (A + B)\u0027 = A\u0027 · B\u0027, (A · B)\u0027 = A\u0027 + B\u0027",
                               "tips":  "Nuclear density is constant across ALL nuclei (~2.3 × 10¹⁷ kg/m³)! Number of half-lives elapsed n = t / T_half; remaining fraction is (½)ⁿ."
                           },
                           {
                               "id":  "chem_01",
                               "title":  "Some Basic Concepts (Mole Concept)",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• 1 mole = 6.022 × 10²³ entities (N_A); STP molar volume = 22.7 L (or 22.4 L at 1 atm, 0°C).\n• Limiting Reagent (LR): Divide given moles of each reactant by its stoichiometric coefficient; the lowest value is the LR.\n• Molarity (M) = moles solute / L of solution; Molality (m) = moles solute / kg of solvent (molality is temperature-independent!).\n• Mole fraction X_A = n_A / (n_A + n_B); Sum of mole fractions = 1.",
                               "formulas":  "1. Moles n = Given mass / Molar mass = N / N_A = Volume at STP / 22.4 L\n2. Normality N = Molarity × n-factor (Valency factor)\n3. Dilution Law: M₁ V₁ = M₂ V₂; Neutralization: N₁ V₁ = N₂ V₂\n4. Molality \u0026 Molarity relation: m = (1000 M) / (1000 d - M × M_solute)\n5. Mass percentage = (Mass of solute / Mass of solution) × 100%",
                               "tips":  "Temperature dependence: Molarity and Normality change with temperature because volume expands. Molality, Mole fraction, and Mass percentage remain CONSTANT with temperature."
                           },
                           {
                               "id":  "chem_02",
                               "title":  "Structure of Atom",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• Quantum numbers: n (shell size \u0026 energy), l (subshell shape: 0=s, 1=p, 2=d, 3=f), m_l (orientation, -l to +l), m_s (spin, ±½).\n• Aufbau principle: Electrons enter lowest (n + l) orbital first. If (n+l) same, lower n wins.\n• Hund\u0027s rule: Orbitals of degenerate subshell are filled singly before pairing.\n• Pauli exclusion: No two electrons in an atom can have the same set of all 4 quantum numbers.",
                               "formulas":  "1. Planck\u0027s Equation: E = h ν = hc / λ\n2. Photoelectric equation: h ν = h ν₀ + ½ m v²\n3. de Broglie wavelength: λ = h / (m v)\n4. Heisenberg Uncertainty: Δx · Δp ≥ h / (4π)\n5. Nodes: Radial nodes = n - l - 1; Angular nodes = l; Total nodes = n - 1",
                               "tips":  "Exceptional electron configurations: Chromium [Ar] 3d⁵ 4s¹ and Copper [Ar] 3d¹⁰ 4s¹ due to extra stability of half-filled and fully-filled degenerate d-subshells."
                           },
                           {
                               "id":  "chem_03",
                               "title":  "Periodic Classification \u0026 Periodicity",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• Atomic radius: Decreases across a period (Z_eff increases); Increases down a group (new shells added).\n• Ionization Enthalpy: IE₁ \u003c IE₂ \u003c IE₃ always. N \u003e O (half-filled 2p³) and Be \u003e B (fully-filled 2s² penetration) are major exceptions.\n• Electron Gain Enthalpy: Most negative for Halogens; Chlorine \u003e Fluorine (F has high inter-electronic repulsion in compact 2p).\n• Electronegativity: F (4.0) \u003e O (3.5) \u003e N (3.0) ≈ Cl (3.0) on Pauling scale.",
                               "formulas":  "1. Effective nuclear charge: Z_eff = Z - σ (Slater\u0027s rules)\n2. Pauling Electronegativity difference: |χ_A - χ_B| = 0.208 √(Δ in kcal/mol)\n3. Mulliken Electronegativity: χ_M = (IE + EA) / 2 (in eV)\n4. Isoelectronic species radius: Inversely proportional to atomic number Z (N³⁻ \u003e O²⁻ \u003e F⁻ \u003e Na⁺ \u003e Mg²⁺ \u003e Al³⁺)",
                               "tips":  "Highest electron gain enthalpy in periodic table is CHLORINE (Cl \u003e F)! Second period elements (N, O, F) have anomalously lower EA than third period (P, S, Cl) due to small 2p size."
                           },
                           {
                               "id":  "chem_04",
                               "title":  "Chemical Bonding \u0026 Molecular Structure",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• VSEPR Theory: Repulsion order: Lone pair - Lone pair \u003e Lone pair - Bond pair \u003e Bond pair - Bond pair.\n• Hybridization steric number: SN = ½ [V + M - C + A] (V=valence electrons of central atom, M=monovalent atoms, C=cation charge, A=anion charge).\n• Molecular Orbital Theory (MOT): For ≤ 14 electrons (B₂, C₂, N₂), π2p_x = π2p_y comes before σ2p_z.\n• Bond order = ½ [N_b - N_a]; Diamagnetic if all paired, Paramagnetic if unpaired.",
                               "formulas":  "1. Steric number: SN = 2 (sp), 3 (sp²), 4 (sp³), 5 (sp³d), 6 (sp³d²)\n2. Bond Order = ½ (N_bonding - N_antibonding)\n3. Dipole moment: μ = q × d (expressed in Debye D, 1 D = 3.335 × 10⁻³⁰ C m)\n4. Formal charge = V - L - ½ S\n5. Paramagnetic species: O₂ (BO = 2, 2 unpaired in π*2p), B₂ (BO = 1)",
                               "tips":  "O₂ is PARAMAGNETIC (explained ONLY by MOT, not VBT). For bond order tricks: 14 e⁻ = BO 3.0; each electron addition or removal drops BO by 0.5 (13 e⁻ = 2.5, 12 e⁻ = 2.0, 15 e⁻ = 2.5, 16 e⁻ = 2.0)."
                           },
                           {
                               "id":  "chem_05",
                               "title":  "Chemical Thermodynamics \u0026 Energetics",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• State functions: U, H, S, G (path-independent); Path functions: q and w.\n• Enthalpy: H = U + PV ⇒ ΔH = ΔU + Δn_g RT (where Δn_g = moles gaseous products - moles gaseous reactants).\n• Spontaneity: ΔG = ΔH - T ΔS (ΔG \u003c 0 for spontaneous at const T, P; ΔG = 0 at equilibrium).\n• Hess\u0027s Law: Total enthalpy change is independent of the pathway taken.",
                               "formulas":  "1. First Law: ΔU = q + w (IUPAC: work done on system is positive)\n2. Work in reversible isothermal: w = -2.303 nRT log(V₂ / V₁)\n3. ΔH = ΔU + Δn_g RT\n4. Gibbs equation: ΔG° = -RT ln K_eq = -2.303 RT log₁₀ K_eq\n5. Entropy: ΔS = q_rev / T; ΔS_universe = ΔS_system + ΔS_surroundings \u003e 0 for irreversible",
                               "tips":  "If ΔH is negative (exothermic) and ΔS is positive, ΔG is ALWAYS negative (spontaneous at ALL temperatures!). If ΔH \u003e 0 and ΔS \u003c 0, non-spontaneous at all temperatures."
                           },
                           {
                               "id":  "chem_06",
                               "title":  "Chemical \u0026 Ionic Equilibrium",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• Le Chatelier\u0027s Principle: Disturbance shifts equilibrium to oppose change (increase P shifts toward fewer gas moles).\n• K_p = K_c (RT)^(Δn_g); Catalyst does NOT alter K_eq, only accelerates equilibrium arrival.\n• pH = -log[H⁺], pOH = -log[OH⁻], pH + pOH = 14 at 25°C.\n• Buffer solutions: Acidic pH = pKa + log([Conjugate Base] / [Acid]); Basic pOH = pKb + log([Conjugate Acid] / [Base]).",
                               "formulas":  "1. Ostwald\u0027s Dilution Law for weak acid: [H⁺] = c α = √(K_a · c)\n2. Henderson-Hasselbalch: pH = pK_a + log([Salt] / [Acid])\n3. Salt of Weak Acid + Strong Base: pH = 7 + ½ pK_a + ½ log c\n4. Salt of Strong Acid + Weak Base: pH = 7 - ½ pK_b - ½ log c\n5. Solubility Product: K_sp = sᵃ⁺ᵇ aᵃ bᵇ for salt A_a B_b (Precipitation occurs if Q_sp \u003e K_sp)",
                               "tips":  "Temperature shifts K_eq: For exothermic reactions (ΔH \u003c 0), increasing temperature DECREASES K_eq. For endothermic reactions (ΔH \u003e 0), increasing temperature INCREASES K_eq."
                           },
                           {
                               "id":  "chem_07",
                               "title":  "Redox Reactions",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• Oxidation is loss of electrons (increase in oxidation number); Reduction is gain of electrons (decrease in ON).\n• Balancing by ion-electron method in acidic medium: Balance elements other than O \u0026 H, add H₂O to balance O, add H⁺ to balance H, add e⁻ to balance charge.\n• n-factor: KMnO₄ in acidic medium = 5 (Mn⁷⁺ → Mn²⁺); in neutral/weakly alkaline = 3 (Mn⁷⁺ → MnO₂); in strongly alkaline = 1 (Mn⁷⁺ → MnO₄²⁻).\n• K₂Cr₂O₇ in acidic medium has n-factor = 6 (Cr₂⁷⁺ → 2 Cr³⁺).",
                               "formulas":  "1. Equivalent mass = Molar mass / n-factor\n2. Number of gram equivalents = Mass / Eq. mass = Normality × Volume(L)\n3. KMnO₄ in acidic: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (n = 5)\n4. K₂Cr₂O₇ in acidic: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O (n = 6)\n5. Disproportionation n-factor: 1/n_total = 1/n_ox + 1/n_red",
                               "tips":  "KMnO₄ n-factor mnemonic: \u0027BAN 153\u0027 (Basic = 1, Acidic = 5, Neutral = 3). K₂Cr₂O₇ is ALWAYS n = 6 in acidic titrations."
                           },
                           {
                               "id":  "chem_08",
                               "title":  "General Organic Chemistry (GOC \u0026 IUPAC)",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• Inductive effect (I): Permanent, distance-dependent through σ bonds. +I (alkyls), -I (-NO₂ \u003e -CN \u003e -COOH \u003e -F \u003e -Cl \u003e -Br \u003e -I).\n• Resonance \u0026 Mesomeric effect (M): Delocalization of π electrons. +M groups increase electron density on benzene ortho/para.\n• Hyperconjugation: No-bond resonance via α-C-H σ bonds with empty p-orbital; stability of carbocation ∝ number of α-hydrogens.\n• Stability orders: Carbocation (3° \u003e 2° \u003e 1° \u003e methyl); Free radical (3° \u003e 2° \u003e 1°); Carbanion (methyl \u003e 1° \u003e 2° \u003e 3°).",
                               "formulas":  "1. Carbocation stability: Resonance \u003e Hyperconjugation (α-H count) \u003e Inductive\n2. Aromaticity Huckel Rule: Planar, fully conjugated, cyclic ring with (4n + 2) π electrons\n3. Anti-aromatic: Planar, cyclic, 4n π electrons (extremely unstable)\n4. Acidity ∝ -M, -I, stable conjugate base (picric acid \u003e formic acid \u003e benzoic acid \u003e acetic acid)\n5. Basicity in aqueous phase for methylamines: 2° \u003e 1° \u003e 3° \u003e NH₃ (order 213); for ethylamines: 2° \u003e 3° \u003e 1° \u003e NH₃ (order 231)",
                               "tips":  "Aliphatic amine basicity order in water: (CH₃)₂NH \u003e CH₃NH₂ \u003e (CH₃)₃N \u003e NH₃ (remember 2° \u003e 1° \u003e 3° = 213 for Methyl). For Ethyl it is 2° \u003e 3° \u003e 1° = 231."
                           },
                           {
                               "id":  "chem_09",
                               "title":  "Hydrocarbons (Alkanes, Alkenes, Alkynes)",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• Wurtz reaction: 2 R-X + 2 Na (dry ether) → R-R (best for symmetrical alkanes with even carbons).\n• Markovnikov\u0027s Rule: Electrophilic addition of H-X to alkene: H attaches to carbon with more H\u0027s, X to more substituted carbon.\n• Anti-Markovnikov (Peroxide / Kharasch effect): ONLY works with HBr in presence of organic peroxide (free radical mechanism; fails with HCl and HI).\n• Ozonolysis: Cleaves C=C double bond into carbonyl compounds (reductive with Zn/H₂O stops at aldehydes; oxidative gives carboxylic acids).",
                               "formulas":  "1. Corey-House synthesis: R₂CuLi + R\u0027-X → R-R\u0027 (symmetrical and unsymmetrical)\n2. Alkene hydration: Acid-catalyzed gives Markovnikov alcohol via carbocation rearrangement\n3. Hydroboration-Oxidation: 1. BH₃·THF, 2. H₂O₂/OH⁻ gives Anti-Markovnikov alcohol without rearrangement\n4. Oxymercuration-Demercuration: gives Markovnikov alcohol without rearrangement\n5. Alkyne hydration: HgSO₄/H₂SO₄ converts terminal alkyne to methyl ketone (propyne → acetone)",
                               "tips":  "Peroxide effect occurs STRICTLY with HBr! HCl bond is too strong for homolysis by peroxide radical, and HI produces unreactive I₂ due to fast combination of iodine radicals."
                           },
                           {
                               "id":  "chem_10",
                               "title":  "Solutions \u0026 Colligative Properties",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• Raoult\u0027s Law: P_total = P_A° X_A + P_B° X_B. Ideal solutions have ΔH_mix = 0, ΔV_mix = 0.\n• Positive deviation: P_obs \u003e P_ideal, A-B interactions weaker than A-A and B-B (e.g., Ethanol + Acetone, ΔH_mix \u003e 0).\n• Negative deviation: P_obs \u003c P_ideal, A-B interactions stronger (e.g., Chloroform + Acetone due to H-bonding, ΔH_mix \u003c 0).\n• Colligative properties depend only on number of solute particles: Relative lowering of VP, Elevation in BP, Depression in FP, Osmotic pressure.",
                               "formulas":  "1. Relative Lowering of VP: (P° - P) / P° = i X_solute\n2. Elevation in BP: ΔT_b = i K_b m\n3. Depression in FP: ΔT_f = i K_f m\n4. Osmotic Pressure: π = i C R T\n5. van \u0027t Hoff factor: i = 1 + (n - 1) α (dissociation); i = 1 + (1/n - 1) β (association)",
                               "tips":  "Always include van \u0027t Hoff factor i! For 0.1 M NaCl i ≈ 2; for 0.1 M BaCl₂ i ≈ 3; for Glucose/Urea i = 1. Highest boiling point corresponds to highest (i × m) product."
                           },
                           {
                               "id":  "chem_11",
                               "title":  "Electrochemistry",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• Nernst Equation: E_cell = E°_cell - (0.0591 / n) log₁₀ Q at 298 K.\n• Standard cell potential: E°_cell = E°_cathode (reduction) - E°_anode (reduction). Cell is feasible if E°_cell \u003e 0.\n• Faraday\u0027s 1st Law: w = Z I t = (M / (n F)) I t (1 Faraday F ≈ 96,500 C = charge on 1 mole electrons).\n• Kohlrausch\u0027s Law: Λ°_m for an electrolyte = sum of limiting ionic conductivities of constituent ions.",
                               "formulas":  "1. Nernst Equation: E = E° - (2.303 RT / nF) log Q\n2. Gibbs Free Energy: ΔG° = -n F E°_cell = -RT ln K_eq\n3. Conductivity: κ = (1 / R) (l / A) = G × G*\n4. Molar Conductivity: Λ_m = (1000 × κ) / M\n5. Degree of dissociation for weak electrolyte: α = Λ_m / Λ°_m; K_a = c α² / (1 - α)",
                               "tips":  "E° is an INTENSIVE property and does NOT scale with stoichiometric coefficients (multiplying half-reaction by 2 does NOT double E°). ΔG° is EXTENSIVE and does scale!"
                           },
                           {
                               "id":  "chem_12",
                               "title":  "Chemical Kinetics",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• Rate Law: Rate = k [A]ᵃ [B]ᵇ. Overall order = a + b (determined experimentally, can be fractional or zero).\n• Zero order: k unit is mol L⁻¹ s⁻¹; Half-life t_half = [A]₀ / (2k) (directly proportional to initial concentration).\n• First order: k unit is s⁻¹; Integrated rate law ln([A]₀/[A]) = kt; Half-life t_half = 0.693 / k (independent of initial concentration!).\n• Arrhenius Equation: k = A e^(-E_a / RT); log(k₂ / k₁) = (E_a / 2.303R) [(T₂ - T₁) / (T₁ T₂)].",
                               "formulas":  "1. Zero order: [A] = [A]₀ - kt; t_1/2 = [A]₀ / (2k)\n2. First order: k = (2.303 / t) log([A]₀ / [A]); t_1/2 = 0.693 / k\n3. First order t_75% = 2 × t_50%; t_99.9% ≈ 10 × t_50%\n4. Arrhenius equation: ln k = ln A - E_a / (RT)\n5. Catalyst lowers activation energy E_a equally for forward and reverse reactions, leaving ΔH unchanged",
                               "tips":  "For a 1st order reaction, t_75% is exactly TWICE t_50% (2 half lives), and t_87.5% is 3 times t_50% (3 half lives). Radioactive decay is always strictly first order kinetics."
                           },
                           {
                               "id":  "chem_13",
                               "title":  "d-Block \u0026 f-Block Elements",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• Transition elements have partially filled (n-1)d orbitals in elemental or common oxidation states (Zn, Cd, Hg are not transition elements).\n• Variable oxidation states due to small energy gap between (n-1)d and ns electrons (highest is Osmium +8 and Manganese +7).\n• Catalytic properties due to variable valency and ability to form complex surface intermediates.\n• Lanthanoid Contraction: Steady decrease in ionic radii from La³⁺ to Lu³⁺ due to poor shielding of 4f electrons, making Zr/Hf and Nb/Ta identical in size.",
                               "formulas":  "1. Spin-only magnetic moment: μ = √[n(n + 2)] Bohr Magnetons (BM), n = unpaired electrons\n2. Color due to d-d transitions and charge transfer (KMnO₄ is purple due to L→M charge transfer, not d-d)\n3. Interstitial compounds: Non-stoichiometric, hard, high melting, retain metallic conductivity\n4. Potassium Dichromate preparation: FeCr₂O₄ + Na₂CO₃ + O₂ → Na₂CrO₄ → Na₂Cr₂O₇ → K₂Cr₂O₇\n5. Actinoids show wider range of oxidation states than lanthanoids because 5f, 6d, 7s have comparable energies",
                               "tips":  "KMnO₄ has Mn in +7 oxidation state (d⁰ configuration, NO d-electrons!). Its intense purple color is due to Charge Transfer from Ligand (oxygen) to Metal (Mn), NOT d-d transition."
                           },
                           {
                               "id":  "chem_14",
                               "title":  "Coordination Compounds",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• Werner\u0027s Theory: Primary valency is ionizable (oxidation state); Secondary valency is non-ionizable (coordination number, directed in space).\n• Crystal Field Theory (CFT): In octahedral field, d-orbitals split into lower t_2g (d_xy, d_yz, d_zx) and higher e_g (d_x²-y², d_z²).\n• Strong field ligands (CN⁻, CO, en, NH₃) cause large splitting Δ_o \u003e P resulting in low-spin paired complexes.\n• Weak field ligands (I⁻, Br⁻, Cl⁻, F⁻, H₂O) result in high-spin complexes. Spectrochemical series order: I⁻ \u003c Br⁻ \u003c S²⁻ \u003c Cl⁻ \u003c F⁻ \u003c OH⁻ \u003c H₂O \u003c NCS⁻ \u003c EDTA⁴⁻ \u003c NH₃ \u003c en \u003c CN⁻ \u003c CO.",
                               "formulas":  "1. Octahedral CFSE: CFSE = [-0.4 n(t_2g) + 0.6 n(e_g)] Δ_o + m P\n2. Tetrahedral splitting: Δ_t = (4/9) Δ_o (tetrahedral complexes are ALWAYS high-spin)\n3. Magnetic moment: μ = √[n(n + 2)] BM\n4. IUPAC naming: cation named first; ligands alphabetical with prefixes; central metal ends in \u0027-ate\u0027 if complex is an anion\n5. Isomerism: Geometrical (cis/trans), Optical (d/l in [Co(en)₃]³⁺), Linkage (ambidentate NO₂⁻, SCN⁻)",
                               "tips":  "[Ni(CO)₄] is tetrahedral \u0026 diamagnetic (sp³). [Ni(CN)₄]²⁻ is square planar \u0026 diamagnetic (dsp²). [NiCl₄]²⁻ is tetrahedral \u0026 paramagnetic (sp³, 2 unpaired electrons)."
                           },
                           {
                               "id":  "chem_15",
                               "title":  "Haloalkanes and Haloarenes",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• S_N1 mechanism: Two steps via carbocation intermediate; racemization occurs; rate = k [R-X]; reactivity 3° \u003e 2° \u003e 1° \u003e CH₃; favored by polar protic solvents.\n• S_N2 mechanism: Single step via pentacoordinate transition state; Walden inversion; rate = k [R-X] [Nu⁻]; reactivity CH₃ \u003e 1° \u003e 2° \u003e 3°; favored by polar aprotic solvents (DMSO, DMF, Acetone).\n• Haloarenes are extremely unreactive toward nucleophilic substitution due to resonance stabilization (partial double bond C-Cl character) and sp² hybridization of ring carbon.\n• Elimination (E2): Follows Zaitsev rule (more substituted, stable alkene is major product).",
                               "formulas":  "1. Finkelstein reaction: R-Cl/Br + NaI (dry acetone) → R-I + NaCl/Br↓\n2. Swarts reaction: R-Cl/Br + AgF/Hg₂F₂/SbF₃ → R-F\n3. Grignard reagent: R-X + Mg (dry ether) → R-MgX\n4. Wurtz-Fittig: Ar-X + R-X + 2 Na → Ar-R + 2 NaX\n5. Chloroform oxidation: CHCl₃ + ½ O₂ (light) → COCl₂ (phosgene toxic gas) + HCl",
                               "tips":  "S_N1 order follows carbocation stability (Allylic ≈ Benzylic \u003e 3° \u003e 2° \u003e 1°). S_N2 is hindered by steric bulk (Neopentyl halide (CH₃)₃C-CH₂X is 1° but almost inert to S_N2 due to severe steric hindrance!)."
                           },
                           {
                               "id":  "chem_16",
                               "title":  "Alcohols, Phenols and Ethers",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• Acidity: Phenol \u003e Water \u003e Alcohols (Phenoxide ion is resonance stabilized; electron-withdrawing groups like -NO₂ at o/p increase acidity drastically).\n• Lucas Test (conc. HCl + anhyd. ZnCl₂): 3° alcohol gives immediate turbidity; 2° gives turbidity in 5 mins; 1° gives no turbidity at room temperature.\n• Reimer-Tiemann reaction: Phenol + CHCl₃ + aq. NaOH → Salicylaldehyde (electrophile is dichlorocarbene :CCl₂).\n• Kolbe reaction: Phenol + NaOH + CO₂ (4-7 atm, 400 K) → Salicylic acid (precursor to Aspirin).\n• Williamson ether synthesis: R-O⁻ Na⁺ + R\u0027-X → R-O-R\u0027 (R\u0027 must be 1° halide to avoid E2 elimination).",
                               "formulas":  "1. Ferric chloride test: Phenol gives violet coloration with neutral FeCl₃\n2. Hydroboration of propene: CH₃CH=CH₂ → CH₃CH₂CH₂OH (1-propanol Anti-Markovnikov)\n3. Acid catalyzed dehydration: 3° \u003e 2° \u003e 1° alcohol to alkene\n4. Williamson synthesis: 3° alkoxide + 1° halide gives ether; 1° alkoxide + 3° halide gives ALKENE via E2\n5. Cleavage of ether with HI: R-O-R\u0027 + HI → smaller alkyl halide via S_N2; if 3° alkyl group present, 3° iodide forms via S_N1",
                               "tips":  "In Williamson ether synthesis, if a tertiary alkyl halide (e.g., tert-butyl bromide) is used with sodium ethoxide, the reaction yields an ALKENE (isobutylene) via E2, NOT an ether!"
                           },
                           {
                               "id":  "chem_17",
                               "title":  "Aldehydes, Ketones \u0026 Carboxylic Acids",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• Nucleophilic addition to carbonyl: Aldehydes are more reactive than ketones due to less steric hindrance and smaller +I inductive effect of H vs alkyl.\n• Aldol condensation: Aldehydes/ketones with α-hydrogen treated with dil. NaOH form β-hydroxy aldehydes/ketones, then α,β-unsaturated carbonyl on heating.\n• Cannizzaro reaction: Aldehydes lacking α-hydrogen (HCHO, PhCHO) treated with conc. NaOH undergo disproportionation to alcohol + carboxylate salt.\n• Iodoform Test: Compounds with CH₃-C=O or CH₃-CH(OH)- group give yellow precipitate of CHI₃ on reaction with I₂ + NaOH.",
                               "formulas":  "1. Tollens\u0027 Test: R-CHO + 2 [Ag(NH₃)₂]⁺ + 3 OH⁻ → R-COO⁻ + 2 Ag↓ (silver mirror) + 4 NH₃ + 2 H₂O\n2. Fehling\u0027s Test: R-CHO + 2 Cu²⁺ + 5 OH⁻ → R-COO⁻ + Cu₂O↓ (red precipitate) + 3 H₂O\n3. Clemmensen reduction: Carbonyl + Zn-Hg / conc. HCl → Hydrocarbon (C=O → CH₂)\n4. Wolff-Kishner reduction: Carbonyl + NH₂NH₂ / KOH (ethylene glycol, heat) → Hydrocarbon\n5. Hell-Volhard-Zelinsky (HVZ): R-CH₂-COOH + X₂ / red P → R-CH(X)-COOH (α-halogenation)",
                               "tips":  "Clemmensen reduction (Zn-Hg / conc. HCl) is avoided for acid-sensitive compounds; use Wolff-Kishner (NH₂NH₂ / KOH, basic) instead. Benzaldehyde does NOT reduce Fehling\u0027s solution!"
                           },
                           {
                               "id":  "chem_18",
                               "title":  "Amines \u0026 Diazonium Salts",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• Basicity of amines in gas phase: 3° \u003e 2° \u003e 1° \u003e NH₃ (purely due to +I effect). Aniline is much weaker base than ammonia due to resonance delocalization of lone pair into benzene ring.\n• Hoffmann Bromamide degradation: Primary amide R-CONH₂ + Br₂ + 4 KOH → R-NH₂ + K₂CO₃ + 2 KBr + 2 H₂O (yields primary amine with ONE LESS carbon).\n• Carbylamine Test (Isocyanide test): 1° amine (aliphatic or aromatic) + CHCl₃ + 3 alc. KOH → R-NC (foul-smelling isocyanide) + 3 KCl + 3 H₂O.\n• Hinsberg Test (Benzenesulfonyl chloride C₆H₅SO₂Cl): 1° amine forms precipitate soluble in alkali; 2° amine forms precipitate insoluble in alkali; 3° amine does not react.",
                               "formulas":  "1. Gabriel Phthalimide: Used exclusively to prepare 1° ALIPHATIC amines (fails for aniline because aryl halides do not undergo S_N2)\n2. Diazotization: Aniline + NaNO₂ + 2 HCl (0 - 5 °C) → Benzene diazonium chloride Ph-N₂⁺ Cl⁻\n3. Sandmeyer reaction: Ph-N₂⁺ Cl⁻ + CuCl/HCl → Ph-Cl; + CuBr/HBr → Ph-Br; + CuCN/KCN → Ph-CN\n4. Gattermann reaction: Ph-N₂⁺ Cl⁻ + Cu powder / HCl → Ph-Cl\n5. Coupling reaction: Ph-N₂⁺ Cl⁻ + Phenol (pH 9-10) → p-hydroxyazobenzene (orange dye); with Aniline (pH 4-5) → p-aminoazobenzene (yellow dye)",
                               "tips":  "Gabriel Phthalimide synthesis CANNOT be used to prepare aromatic primary amines (aniline) because haloarenes cannot undergo nucleophilic substitution (S_N2) with potassium phthalimide."
                           },
                           {
                               "id":  "chem_19",
                               "title":  "Biomolecules",
                               "subject":  "Chemistry",
                               "exam":  "All Exams",
                               "concepts":  "• Carbohydrates: Monosaccharides (Glucose, Fructose). D/L configuration based on configuration of lowest chiral carbon matching D-glyceraldehyde.\n• Reducing sugars: All monosaccharides and disaccharides having free hemiacetal/hemiketal OH (Maltose, Lactose). Sucrose is a NON-REDUCING sugar (glycosidic bond between C1 of α-glucose and C2 of β-fructose).\n• Amino Acids: All naturally occurring α-amino acids (except Glycine, which is achiral) are optically active and have L-configuration. Zwitterion form has net dipole but zero net charge at isoelectric point (pI).\n• Nucleic Acids: DNA (Adenine, Guanine, Cytosine, Thymine; 2-deoxyribose); RNA (A, G, C, Uracil; ribose). Phosphodiester linkage connects 3\u0027-OH and 5\u0027-OH.",
                               "formulas":  "1. Glycosidic linkage: Ether oxide linkage formed between two monosaccharide units by loss of H₂O\n2. Peptide linkage: -CO-NH- bond formed by condensation of -COOH and -NH₂\n3. Invert sugar: Sucrose (dextrorotatory, +66.5°) on hydrolysis gives D-glucose (+52.7°) and D-fructose (-92.4°), resulting in net LEVOROTATORY mixture\n4. Denaturation of proteins: Heat/acid disrupts secondary and tertiary structures; PRIMARY structure remains intact\n5. DNA base pairing: A = T (2 hydrogen bonds), G ≡ C (3 hydrogen bonds)",
                               "tips":  "Glycine (H₂N-CH₂-COOH) is the ONLY natural amino acid without a chiral carbon (optically inactive!). Sucrose is non-reducing, but becomes reducing upon acid hydrolysis (invert sugar)."
                           },
                           {
                               "id":  "math_01",
                               "title":  "Basic Mathematics, Modulus \u0026 Logarithms",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Modulus |x| = x for x ≥ 0, -x for x \u003c 0. Triangle inequality: |a + b| ≤ |a| + |b|.\n• Wavy Curve method (Method of Intervals): Factorize expression, plot roots on number line; flip sign across odd multiplicity roots, retain sign across even multiplicity roots.\n• Logarithm conditions: log_b(a) requires a \u003e 0, b \u003e 0, and b ≠ 1.\n• Base change formula: log_b(a) = (ln a) / (ln b) = 1 / log_a(b).",
                               "formulas":  "1. log_b(x · y) = log_b(x) + log_b(y)\n2. log_b(x / y) = log_b(x) - log_b(y)\n3. log_(bᵏ)(xⁿ) = (n / k) log_b(x)\n4. a^(log_b c) = c^(log_b a)\n5. If b \u003e 1: log_b(x) \u003e log_b(y) ⇔ x \u003e y. If 0 \u003c b \u003c 1: inequality reverses (x \u003c y)!",
                               "tips":  "When base of logarithm is between 0 and 1 (0 \u003c b \u003c 1), taking antilog FLIPS the inequality sign: log_{0.5}(x) \u003e 2 ⇒ x \u003c (0.5)² = 0.25 (with x \u003e 0)."
                           },
                           {
                               "id":  "math_02",
                               "title":  "Sets, Relations \u0026 Functions",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Relations on set A: Reflexive ((a,a) ∈ R ∀ a); Symmetric (if (a,b) ∈ R then (b,a) ∈ R); Transitive (if (a,b) and (b,c) ∈ R then (a,c) ∈ R). Equivalence relation satisfies all 3.\n• Function types: One-one (Injective, f\u0027(x) strictly monotonic); Onto (Surjective, Range = Codomain); Bijective = Injective + Surjective (invertible).\n• Periodicity: If f(x + T) = f(x), smallest T \u003e 0 is fundamental period. sin(kx) has period 2π/|k|; tan(kx) has period π/|k|.\n• Even/Odd: Even f(-x) = f(x) (symmetric about y-axis); Odd f(-x) = -f(x) (symmetric about origin).",
                               "formulas":  "1. Number of subsets of set with n elements = 2ⁿ\n2. Number of relations from A to B with m and n elements = 2^(mn)\n3. Number of one-one functions from A to B = ⁿP_m (if n ≥ m)\n4. Composition: (g ∘ f)(x) = g(f(x)), Domain requires x ∈ Domain(f) and f(x) ∈ Domain(g)\n5. Inverse function: f(f⁻¹(x)) = x, graph of f⁻¹ is reflection of f across the line y = x",
                               "tips":  "To test injectivity (one-one) for differentiable functions: Compute f\u0027(x). If f\u0027(x) \u003e 0 everywhere or f\u0027(x) \u003c 0 everywhere, f(x) is strictly monotonic and GUARANTEED one-one."
                           },
                           {
                               "id":  "math_03",
                               "title":  "Trigonometric Functions \u0026 Equations",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Compound angle identities: sin(A ± B) = sin A cos B ± cos A sin B; cos(A ± B) = cos A cos B ∓ sin A sin B.\n• Double angle: sin 2θ = 2 sin θ cos θ = (2 tan θ) / (1 + tan² θ); cos 2θ = cos² θ - sin² θ = 2 cos² θ - 1 = 1 - 2 sin² θ = (1 - tan² θ) / (1 + tan² θ).\n• Transformation: 2 sin A cos B = sin(A + B) + sin(A - B); 2 cos A cos B = cos(A + B) + cos(A - B); 2 sin A sin B = cos(A - B) - cos(A + B).\n• Linear combination: a sin x + b cos x = √(a² + b²) sin(x + α), range is [-√(a² + b²), +√(a² + b²)].",
                               "formulas":  "1. Range of a sin x + b cos x is [-√(a² + b²), √(a² + b²)]\n2. General solution: sin θ = sin α ⇒ θ = nπ + (-1)ⁿ α\n3. General solution: cos θ = cos α ⇒ θ = 2nπ ± α\n4. General solution: tan θ = tan α ⇒ θ = nπ + α\n5. sin² θ = sin² α or cos² θ = cos² α ⇒ θ = nπ ± α",
                               "tips":  "Maximum and minimum value of a sin x + b cos x + c are c + √(a² + b²) and c - √(a² + b²). If cos x + cos y = 2, then both cos x = 1 and cos y = 1 simultaneously."
                           },
                           {
                               "id":  "math_04",
                               "title":  "Quadratic Equations \u0026 Expressions",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Quadratic ax² + bx + c = 0: Roots α, β = (-b ± √D) / (2a) with Discriminant D = b² - 4ac.\n• Nature of roots: D \u003e 0 (real and distinct); D = 0 (real and equal, vertex touches x-axis); D \u003c 0 (complex conjugate pairs).\n• Sign of quadratic: If a \u003e 0 and D \u003c 0, then ax² + bx + c \u003e 0 for ALL real x (parabola strictly above x-axis).\n• Vertex of parabola y = ax² + bx + c is (-b / (2a), -D / (4a)).",
                               "formulas":  "1. Sum of roots: α + β = -b / a; Product of roots: α β = c / a\n2. Difference of roots: |α - β| = √D / |a|\n3. Both roots greater than k: D ≥ 0, -b/(2a) \u003e k, and a · f(k) \u003e 0\n4. Both roots lie between k₁ and k₂: D ≥ 0, k₁ \u003c -b/(2a) \u003c k₂, a · f(k₁) \u003e 0, and a · f(k₂) \u003e 0\n5. Exactly one root between k₁ and k₂: f(k₁) · f(k₂) \u003c 0",
                               "tips":  "Condition for ax² + bx + c to be strictly positive (f(x) \u003e 0) for EVERY real x: \u0027a \u003e 0 AND D \u003c 0\u0027. If D \u003c 0, the expression NEVER crosses the x-axis."
                           },
                           {
                               "id":  "math_05",
                               "title":  "Complex Numbers",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Cartesian z = x + iy; Polar z = r(cos θ + i sin θ) = r e^(iθ) with modulus r = |z| = √(x² + y²) and argument θ = arg(z) ∈ (-π, π].\n• Euler\u0027s formula e^(iθ) = cos θ + i sin θ. De Moivre\u0027s Theorem: (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ).\n• Cube roots of unity: 1, ω = (-1 + i√3)/2, ω² = (-1 - i√3)/2; Properties: 1 + ω + ω² = 0, ω³ = 1, ω* = ω².\n• Geometric interpretation: |z - z₁| is distance between z and z₁; |z - z₁| = |z - z₂| represents perpendicular bisector.",
                               "formulas":  "1. Triangle inequalities: ||z₁| - |z₂|| ≤ |z₁ ± z₂| ≤ |z₁| + |z₂|\n2. Conjugate properties: |z|² = z · z̄; arg(z₁ z₂) = arg(z₁) + arg(z₂)\n3. Circle equation: |z - z₀| = r (center z₀, radius r)\n4. Argument locus: arg[(z - z₁) / (z - z₂)] = α represents circular arc subtending angle α\n5. Cube roots of unity: 1 + ω + ω² = 0 and ω³ = 1",
                               "tips":  "Remember 1 + ω + ω² = 0 and ω³ = 1. Cube roots of unity form vertices of an equilateral triangle inscribed in unit circle. |z₁ + z₂|² + |z₁ - z₂|² = 2(|z₁|² + |z₂|²)."
                           },
                           {
                               "id":  "math_06",
                               "title":  "Permutations \u0026 Combinations (P\u0026C)",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Fundamental principle of counting: Multiplication rule for sequential independent tasks; Addition rule for mutually exclusive tasks.\n• Permutation (Arrangement with order): ⁿP_r = n! / (n - r)!; Combination (Selection without order): ⁿC_r = n! / [r! (n - r)!].\n• Permutations of n objects with p of type 1, q of type 2: Total = n! / (p! q!).\n• Circular permutations: (n - 1)! for distinct orientation; (n - 1)! / 2 for necklaces/garlands.",
                               "formulas":  "1. Pascal\u0027s Identity: ⁿC_r + ⁿC_{r-1} = ⁿ⁺¹C_r\n2. Symmetry: ⁿC_r = ⁿC_{n-r}\n3. Sum of binomial coefficients: Σ ⁿC_r = 2ⁿ\n4. Beggar\u0027s method (Stars and Bars): Non-negative integer solutions to x₁ + x₂ + ... + x_r = n is ⁿ⁺ʳ⁻¹C_{r-1}\n5. Derangements: D_n = n! [1 - 1/1! + 1/2! - 1/3! + ... + (-1)ⁿ/n!]",
                               "tips":  "Derangement numbers to memorize: D₁ = 0, D₂ = 1, D₃ = 2, D₄ = 9, D₅ = 44. Gap method: place non-restricted items first, then insert restricted items in between gaps."
                           },
                           {
                               "id":  "math_07",
                               "title":  "Binomial Theorem",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Expansion: (x + y)ⁿ = Σ_{r=0}^{n} ⁿC_r x^(n-r) yʳ.\n• General term: T_{r+1} = ⁿC_r x^(n-r) yʳ (Notice term index is r + 1).\n• Middle term: If n is even, single middle term is T_{n/2 + 1}; If n is odd, two middle terms: T_{(n+1)/2} and T_{(n+3)/2}.\n• Greatest Binomial Coefficient: ⁿC_{n/2} for even n; ⁿC_{(n-1)/2} = ⁿC_{(n+1)/2} for odd n.",
                               "formulas":  "1. General term: T_{r+1} = ⁿC_r a^(n-r) bʳ\n2. Sum of coefficients: Put all variables = 1 in expansion\n3. C₀ + C₁ + C₂ + ... + C_n = 2ⁿ\n4. C₀ - C₁ + C₂ - ... + (-1)ⁿ C_n = 0\n5. C₁ + 2 C₂ + 3 C₃ + ... + n C_n = n · 2ⁿ⁻¹ (Differentiate (1 + x)ⁿ)",
                               "tips":  "To find the sum of all coefficients in ANY polynomial expansion like (2x - 3y + z)¹⁰, simply substitute x = 1, y = 1, z = 1: (2(1) - 3(1) + 1)¹⁰ = 0¹⁰ = 0!"
                           },
                           {
                               "id":  "math_08",
                               "title":  "Sequences \u0026 Series (AP, GP, AGP)",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Arithmetic Progression (AP): a_n = a + (n - 1)d; Sum S_n = n/2 [2a + (n - 1)d] = n/2 (a + l); AM = (a + b)/2.\n• Geometric Progression (GP): a_n = a rⁿ⁻¹; Sum S_n = a(1 - rⁿ) / (1 - r); Infinite GP sum S_∞ = a / (1 - r) for |r| \u003c 1; GM = √(ab).\n• AM-GM-HM Inequality: AM ≥ GM ≥ HM (equality holds if and only if all numbers are equal).\n• Telescoping sums: Express general term t_n as difference of consecutive terms f(n) - f(n - 1).",
                               "formulas":  "1. Sum of first n natural numbers: Σ n = n(n + 1) / 2\n2. Sum of squares: Σ n² = n(n + 1)(2n + 1) / 6\n3. Sum of cubes: Σ n³ = [n(n + 1) / 2]² = (Σ n)²\n4. Infinite GP: S_∞ = a / (1 - r) for |r| \u003c 1\n5. AM ≥ GM: For positive real numbers x₁ + x₂ + ... + x_n ≥ n · (x₁ x₂ ... x_n)^(1/n)",
                               "tips":  "AM ≥ GM is the #1 tool for finding minimum values of sums of positive terms (e.g., minimum of x + 4/x for x \u003e 0 is 2 √(x · 4/x) = 4)."
                           },
                           {
                               "id":  "math_09",
                               "title":  "Straight Lines in 2D",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Slope m = tan θ = (y₂ - y₁) / (x₂ - x₁); Parallel lines m₁ = m₂; Perpendicular lines m₁ · m₂ = -1.\n• Angle between two lines: tan θ = |(m₁ - m₂) / (1 + m₁ m₂)|.\n• Perpendicular distance of point (x₁, y₁) from line ax + by + c = 0: d = |a x₁ + b y₁ + c| / √(a² + b²).\n• Distance between parallel lines ax + by + c₁ = 0 and ax + by + c₂ = 0: d = |c₁ - c₂| / √(a² + b²).",
                               "formulas":  "1. Point-slope: y - y₁ = m(x - x₁)\n2. Intercept form: x/a + y/b = 1\n3. Perpendicular distance: d = |ax₁ + by₁ + c| / √(a² + b²)\n4. Distance between parallel lines: d = |c₁ - c₂| / √(a² + b²)\n5. Image of point (x₁, y₁) across line ax + by + c = 0: (x - x₁)/a = (y - y₁)/b = -2(ax₁ + by₁ + c)/(a² + b²)",
                               "tips":  "Foot of perpendicular from (x₁, y₁) on ax + by + c = 0: (x - x₁)/a = (y - y₁)/b = -(ax₁ + by₁ + c)/(a² + b²). For image, just replace -1 with -2."
                           },
                           {
                               "id":  "math_10",
                               "title":  "Circles",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• General equation: x² + y² + 2gx + 2fy + c = 0 (Center = (-g, -f), Radius r = √(g² + f² - c)).\n• Condition for line y = mx + c to be tangent to circle x² + y² = a²: c = ± a √(1 + m²).\n• Point of contact: (-a² m / c, a² / c).\n• Tangent at point (x₁, y₁): T = 0 ⇒ x x₁ + y y₁ + g(x + x₁) + f(y + y₁) + c = 0.\n• Length of tangent from external point (x₁, y₁): L = √S₁ = √(x₁² + y₁² + 2gx₁ + 2fy₁ + c).",
                               "formulas":  "1. Standard circle: (x - h)² + (y - k)² = r²\n2. Tangency condition: d = r (Perpendicular distance from center to line equals radius)\n3. Tangent slope form: y = mx ± a √(1 + m²)\n4. Length of tangent: L = √S₁\n5. Director circle (locus of perpendicular tangents): x² + y² = 2a² (radius is √2 times)",
                               "tips":  "Tangency condition is always d = r (distance from center to line = radius). Director circle of x² + y² = r² is x² + y² = 2r² (concentric with radius √2 r)."
                           },
                           {
                               "id":  "math_11",
                               "title":  "Conic Sections (Parabola, Ellipse, Hyperbola)",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Parabola y² = 4ax: Focus (a, 0), Directrix x = -a, Latus Rectum = 4a; Tangent in slope form: y = mx + a/m; Parametric (at², 2at).\n• Ellipse x²/a² + y²/b² = 1 (a \u003e b): Eccentricity e = √(1 - b²/a²); Foci (±ae, 0); Latus Rectum = 2b²/a; Tangent: y = mx ± √(a²m² + b²).\n• Hyperbola x²/a² - y²/b² = 1: Eccentricity e = √(1 + b²/a²); Foci (±ae, 0); Asymptotes y = ±(b/a)x; Tangent: y = mx ± √(a²m² - b²).\n• Rectangular hyperbola xy = c²: e = √2, parametric (ct, c/t).",
                               "formulas":  "1. Parabola tangent: y = mx + a/m (point of contact: a/m², 2a/m)\n2. Ellipse tangent: y = mx ± √(a² m² + b²)\n3. Hyperbola tangent: y = mx ± √(a² m² - b²)\n4. Director circles: Parabola = Directrix (x = -a); Ellipse = x² + y² = a² + b²; Hyperbola = x² + y² = a² - b²\n5. Reflection property of parabola: Ray parallel to axis reflects through focus",
                               "tips":  "Director circle of parabola is its DIRECTRIX (x = -a)! Any two tangents drawn from any point on the directrix are always mutually perpendicular (angle = 90°)."
                           },
                           {
                               "id":  "math_12",
                               "title":  "Limits, Continuity \u0026 Differentiability",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Standard limits: lim_{x→0} (sin x)/x = 1, lim_{x→0} (tan x)/x = 1, lim_{x→0} (eˣ - 1)/x = 1, lim_{x→0} (ln(1 + x))/x = 1.\n• Indeterminate forms: 0/0 and ∞/∞ apply L\u0027Hopital\u0027s Rule (differentiate numerator and denominator separately).\n• Form 1^∞: lim_{x→a} f(x)^g(x) = e^[lim_{x→a} g(x) (f(x) - 1)].\n• Continuity at a: lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x) = f(a).\n• Differentiability implies continuity, but continuity does NOT imply differentiability (e.g., |x| is continuous at 0, but has a sharp corner so non-differentiable).",
                               "formulas":  "1. Standard limit: lim_{x→0} (1 - cos x) / x² = ½\n2. Limit 1^∞ formula: e^[lim g(x) (f(x) - 1)]\n3. L\u0027Hopital\u0027s Rule: lim f(x)/g(x) = lim f\u0027(x)/g\u0027(x) (for 0/0 or ∞/∞)\n4. Left hand derivative LHD = lim_{h→0} [f(a) - f(a - h)] / h\n5. Right hand derivative RHD = lim_{h→0} [f(a + h) - f(a)] / h",
                               "tips":  "Remember 1 - cos x ≈ x²/2 when x → 0. In 1^∞ limits, immediately apply e^[lim g(x) (f(x) - 1)]. Any sharp turn or cusp on a graph means NON-DIFFERENTIABLE."
                           },
                           {
                               "id":  "math_13",
                               "title":  "Application of Derivatives (AOD)",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Monotonicity: f\u0027(x) ≥ 0 for increasing; f\u0027(x) ≤ 0 for decreasing.\n• Tangent \u0026 Normal: Slope of tangent m_T = f\u0027(x₁); Slope of normal m_N = -1 / f\u0027(x₁).\n• Maxima \u0026 Minima: Critical points where f\u0027(x) = 0 or f\u0027(x) does not exist; Second derivative test: f\u0027\u0027(c) \u003c 0 ⇒ local maximum; f\u0027\u0027(c) \u003e 0 ⇒ local minimum.\n• Rolle\u0027s Theorem: If f continuous on [a,b], differentiable on (a,b), and f(a) = f(b), then ∃ c ∈ (a,b) where f\u0027(c) = 0.\n• LMVT (Mean Value Theorem): ∃ c ∈ (a,b) such that f\u0027(c) = [f(b) - f(a)] / (b - a).",
                               "formulas":  "1. Equation of tangent: y - y₁ = f\u0027(x₁) (x - x₁)\n2. Equation of normal: y - y₁ = (-1 / f\u0027(x₁)) (x - x₁)\n3. Length of tangent = |y₁| √(1 + 1/m²); Length of normal = |y₁| √(1 + m²)\n4. Length of subtangent = |y₁ / m|; Length of subnormal = |y₁ m|\n5. Point of inflection: d²y/dx² = 0 and concavity changes sign",
                               "tips":  "Subnormal length is |y · dy/dx|. For a parabola y² = 4ax, subnormal length is ALWAYS constant and equal to 2a!"
                           },
                           {
                               "id":  "math_14",
                               "title":  "Indefinite \u0026 Definite Integration",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Integration by Parts: ∫ u v dx = u ∫ v dx - ∫ [u\u0027 ∫ v dx] dx (Choose u by ILATE: Inverse, Log, Algebraic, Trig, Exponential).\n• King\u0027s Property: ∫_a^b f(x) dx = ∫_a^b f(a + b - x) dx (Solves 80% of definite integral questions!).\n• Even/Odd property: ∫_{-a}^{a} f(x) dx = 0 if f is odd; = 2 ∫_0^a f(x) dx if f is even.\n• Periodicity: If f(x + T) = f(x), then ∫_0^{nT} f(x) dx = n ∫_0^T f(x) dx.\n• Leibniz Rule for differentiating integrals: d/dx ∫_{u(x)}^{v(x)} f(t) dt = f(v(x)) v\u0027(x) - f(u(x)) u\u0027(x).",
                               "formulas":  "1. Special integral: ∫ eˣ [f(x) + f\u0027(x)] dx = eˣ f(x) + C\n2. King\u0027s Property: ∫_a^b f(x) dx = ∫_a^b f(a + b - x) dx\n3. Queen\u0027s Property: ∫_0^{2a} f(x) dx = 2 ∫_0^a f(x) dx if f(2a - x) = f(x); = 0 if f(2a - x) = -f(x)\n4. Leibniz Differentiation: d/dx ∫_{g(x)}^{h(x)} f(t) dt = f(h(x)) h\u0027(x) - f(g(x)) g\u0027(x)\n5. Walli\u0027s formula for ∫_0^{π/2} sinⁿ x cosᵐ x dx",
                               "tips":  "When dealing with definite integrals with bounds 0 to π/2 or a to b, ALWAYS try King\u0027s Property (x → a + b - x) and add I + I = 2I. In 90% of cases the integrand simplifies dramatically!"
                           },
                           {
                               "id":  "math_15",
                               "title":  "Differential Equations \u0026 Area Under Curve",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Order = Highest derivative present; Degree = Power of highest derivative when equation is polynomial in derivatives.\n• Variable Separable: dy/dx = f(x) g(y) ⇒ dy / g(y) = f(x) dx.\n• Linear Differential Equation (LDE): dy/dx + P(x) y = Q(x) ⇒ Integrating factor IF = e^(∫ P dx); Solution: y · IF = ∫ (Q · IF) dx + C.\n• Homogeneous DE: dy/dx = f(y/x), substitute y = vx.\n• Area Under Curve: Area between curves f(x) and g(x) from a to b = ∫_a^b |f(x) - g(x)| dx.",
                               "formulas":  "1. Integrating Factor: IF = e^(∫ P(x) dx)\n2. Solution of LDE: y · e^(∫ P dx) = ∫ Q(x) · e^(∫ P dx) dx + C\n3. Bernoulli equation: dy/dx + P y = Q yⁿ (Divide by yⁿ and substitute z = y^(1-n))\n4. Area between parabola y² = 4ax and x² = 4by: Area = (16 / 3) a b\n5. Area enclosed by ellipse x²/a² + y²/b² = 1: Area = π a b",
                               "tips":  "Area between y² = 4ax and x² = 4by is ALWAYS (16/3) ab = 16 a b / 3. Area between parabola y² = 4ax and line y = mx is 8a² / (3 m³)."
                           },
                           {
                               "id":  "math_16",
                               "title":  "Vectors \u0026 3D Geometry",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Scalar Triple Product: [a b c] = a · (b × c) = Volume of parallelepiped. Coplanar condition: [a b c] = 0.\n• Vector Triple Product: a × (b × c) = (a · c) b - (a · b) c (\u0027BAC - CAB\u0027 rule).\n• Line in 3D: r = a + λ b; Cartesian: (x - x₁)/a = (y - y₁)/b = (z - z₁)/c.\n• Shortest distance between skew lines r = a₁ + λ b₁ and r = a₂ + μ b₂: d = |(a₂ - a₁) · (b₁ × b₂)| / |b₁ × b₂|.\n• Direction cosines: l² + m² + n² = 1.",
                               "formulas":  "1. Vector triple product: a × (b × c) = (a · c) b - (a · b) c\n2. Scalar triple product: [a b c] = det([a₁ a₂ a₃; b₁ b₂ b₃; c₁ c₂ c₃])\n3. Shortest distance between skew lines: d = |(a₂ - a₁) · (b₁ × b₂)| / |b₁ × b₂|\n4. Angle between two lines: cos θ = |a₁ a₂ + b₁ b₂ + c₁ c₂| / [√(a₁² + b₁² + c₁²) √(a₂² + b₂² + c₂²)]\n5. Distance of point (x₁, y₁, z₁) from plane ax + by + cz + d = 0: d = |ax₁ + by₁ + cz₁ + d| / √(a² + b² + c²)",
                               "tips":  "Remember \u0027BAC minus CAB\u0027 rule: a × (b × c) = b (a · c) - c (a · b). If two lines intersect, shortest distance d = 0, which means (a₂ - a₁) · (b₁ × b₂) = 0."
                           },
                           {
                               "id":  "math_17",
                               "title":  "Matrices \u0026 Determinants",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Matrix multiplication is associative AB(C) = A(BC), but NOT commutative AB ≠ BA.\n• Transpose properties: (AB)ᵀ = Bᵀ Aᵀ; Symmetric Aᵀ = A; Skew-symmetric Aᵀ = -A (diagonal entries are always 0).\n• Determinant properties: |AB| = |A| |B|; |kA| = kⁿ |A| for n×n matrix; |Aᵀ| = |A|; |adj A| = |A|^(n - 1); |A · adj A| = |A|ⁿ.\n• Inverse: A⁻¹ = (adj A) / |A| (exists iff |A| ≠ 0).\n• Cramer\u0027s Rule for system of linear equations: Unique solution if Δ ≠ 0; Infinite solutions if Δ = Δ_x = Δ_y = Δ_z = 0; Inconsistent (no solution) if Δ = 0 and at least one Δ_i ≠ 0.",
                               "formulas":  "1. Determinant scaling: |k A| = kⁿ |A| (for n × n matrix)\n2. Adjoint determinant: |adj A| = |A|^(n - 1)\n3. Double adjoint determinant: |adj(adj A)| = |A|^((n - 1)²)\n4. Inverse of product: (AB)⁻¹ = B⁻¹ A⁻¹\n5. Characteristic equation: det(A - λ I) = 0 (Cayley-Hamilton Theorem: A satisfies its own characteristic equation)",
                               "tips":  "Determinant of adjoint formula: |adj A| = |A|^(n-1). For 3×3 matrix, |adj A| = |A|² and |adj(adj A)| = |A|⁴. If |A| = 0, matrix has NO inverse."
                           },
                           {
                               "id":  "math_18",
                               "title":  "Probability \u0026 Statistics",
                               "subject":  "Mathematics",
                               "exam":  "All Exams",
                               "concepts":  "• Conditional Probability: P(A | B) = P(A ∩ B) / P(B); Independent events: P(A ∩ B) = P(A) · P(B).\n• Total Probability Theorem: P(A) = Σ P(Bᵢ) · P(A | Bᵢ).\n• Bayes\u0027 Theorem: P(B_k | A) = [P(B_k) · P(A | B_k)] / [Σ P(Bᵢ) · P(A | Bᵢ)].\n• Binomial Distribution: P(X = r) = ⁿC_r pʳ q^(n-r) with Mean μ = n p, Variance σ² = n p q (Variance \u003c Mean always).\n• Statistics: Variance σ² = (Σ xᵢ² / N) - (x̄)²; Coefficient of Variation CV = (σ / x̄) × 100%.",
                               "formulas":  "1. Bayes\u0027 Theorem: P(E_i | A) = [P(E_i) P(A | E_i)] / [Σ P(E_j) P(A | E_j)]\n2. Binomial Distribution: Mean = np, Variance = npq, SD = √(npq)\n3. Variance formula: σ² = [Σ xᵢ² / N] - [Σ xᵢ / N]²\n4. If each observation is multiplied by k: new mean = k x̄, new variance = k² σ², new SD = |k| σ\n5. If constant c is added to each observation: mean becomes x̄ + c, variance and SD remain UNCHANGED",
                               "tips":  "Adding a constant to every data point does NOT change variance or standard deviation! Multiplying every point by k multiplies standard deviation by |k| and variance by k²."
                           }
                       ],
    "flashcards":  [
                       {
                           "id":  "fc_jee_phy_01",
                           "subject":  "Physics",
                           "exam":  "JEE Main",
                           "chapter":  "Motion in a Plane \u0026 Mechanics",
                           "front":  "Projectile on Inclined Plane \u0026 Velocity Angle",
                           "back":  "For maximum range up an inclined plane of angle β:\nθ = 45° + β/2\nR_max = u² / [g(1 + sin β)]\nRange down incline: R_max = u² / [g(1 - sin β)]",
                           "note":  "Frequently tested in JEE Advanced. Watch out: angle θ is measured with the horizontal, not the incline."
                       },
                       {
                           "id":  "fc_jee_phy_02",
                           "subject":  "Physics",
                           "exam":  "JEE Main",
                           "chapter":  "Rotational Motion",
                           "front":  "Instantaneous Center of Zero Velocity \u0026 Rolling Acceleration",
                           "back":  "Acceleration of rolling body on incline of angle θ:\na = (g sin θ) / [1 + (k²/R²)]\nFriction f = [mg sin θ] / [1 + (R²/k²)]",
                           "note":  "JEE Trap: Solid sphere has k²/R² = 2/5 (fastest), Ring has k²/R² = 1 (slowest)."
                       },
                       {
                           "id":  "fc_jee_chem_01",
                           "subject":  "Chemistry",
                           "exam":  "JEE Main",
                           "chapter":  "Chemical Bonding \u0026 MOT",
                           "front":  "MOT Bond Order \u0026 Magnetic Nature Shortcut",
                           "back":  "For 14 electrons (N2): Bond Order = 3.0.\nEach electron added or removed changes Bond Order by 0.5:\n13 e- (N2+): 2.5 (paramagnetic)\n14 e- (N2): 3.0 (diamagnetic)\n15 e- (O2+): 2.5 (paramagnetic)\n16 e- (O2): 2.0 (paramagnetic, 2 unpaired in π*2px, π*2py)",
                           "note":  "JEE Main classic: O2 and B2 are paramagnetic due to unpaired electrons in degenerate orbitals."
                       },
                       {
                           "id":  "fc_jee_chem_02",
                           "subject":  "Chemistry",
                           "exam":  "JEE Main",
                           "chapter":  "General Organic Chemistry",
                           "front":  "Ortho Effect in Substituted Benzoic Acids \u0026 Aniline",
                           "back":  "Any ortho-substituted benzoic acid (whether -NO2 or -CH3) is STRONGER than benzoic acid due to steric inhibition of resonance (SIR effect).\nOrder: o-nitro \u003e p-nitro \u003e m-nitro \u003e benzoic acid.",
                           "note":  "Crucial for JEE. In aniline, ortho effect causes steric hindrance to protonation, making o-substituted anilines weaker bases."
                       },
                       {
                           "id":  "fc_jee_math_01",
                           "subject":  "Mathematics",
                           "exam":  "JEE Main",
                           "chapter":  "Definite Integration",
                           "front":  "Leibniz Integral Rule for Differentiation Under Integral Sign",
                           "back":  "d/dx [ ∫_{u(x)}^{v(x)} f(t) dt ] = f(v(x)) · v\u0027(x) - f(u(x)) · u\u0027(x)",
                           "note":  "Guaranteed 1 question in JEE Main / Advanced limits problems formatted as 0/0 applying L\u0027Hopital with Leibniz rule."
                       },
                       {
                           "id":  "fc_jee_math_02",
                           "subject":  "Mathematics",
                           "exam":  "JEE Main",
                           "chapter":  "Vectors \u0026 3D Geometry",
                           "front":  "Shortest Distance Between Skew Lines",
                           "back":  "For lines r = a1 + λ b1 and r = a2 + μ b2:\nd = |(a2 - a1) · (b1 × b2)| / |b1 × b2|\nIf d = 0, the lines are coplanar.",
                           "note":  "JEE staple: Always check if cross product b1 × b2 is zero (parallel lines) before applying skew line formula."
                       },
                       {
                           "id":  "fc_bit_phy_01",
                           "subject":  "Physics",
                           "exam":  "BITSAT",
                           "chapter":  "Units, Dimensions \u0026 Errors",
                           "front":  "Vernier \u0026 Screw Gauge Least Count Speed Formula",
                           "back":  "Vernier LC = 1 MSD - 1 VSD = (1 - n/m) MSD\nScrew Gauge LC = Pitch / (Number of Circular Scale Divisions)\nMeasured Value = MSR + (CSR × LC) - Zero Error",
                           "note":  "Speed rule for BITSAT: If zero is to the right of reference, subtract positive error; if to the left, add negative error magnitude."
                       },
                       {
                           "id":  "fc_bit_phy_02",
                           "subject":  "Physics",
                           "exam":  "BITSAT",
                           "chapter":  "Waves \u0026 Sound",
                           "front":  "Doppler Effect Universal Equation",
                           "back":  "f\u0027 = f [(v ± v_observer) / (v ∓ v_source)]\nRule: Numerator uses + when observer approaches.\nDenominator uses - when source approaches.",
                           "note":  "BITSAT speed tip: Approach always increases observed frequency; receding always decreases observed frequency."
                       },
                       {
                           "id":  "fc_bit_chem_01",
                           "subject":  "Chemistry",
                           "exam":  "BITSAT",
                           "chapter":  "Redox \u0026 Coordination Chemistry",
                           "front":  "Tricky Peroxo Oxidation States \u0026 Spin Only Magnetic Moment",
                           "back":  "CrO5 (Butterfly structure): Cr = +6 (two peroxo -O-O- bonds)\nH2SO5 (Caro\u0027s acid): S = +6\nH2S2O8 (Marshall\u0027s acid): S = +6\nμ = √(n(n + 2)) BM (where n = number of unpaired electrons)",
                           "note":  "Direct memory question in BITSAT: 1 unpaired = 1.73 BM, 2 = 2.83 BM, 3 = 3.87 BM, 4 = 4.90 BM, 5 = 5.92 BM."
                       },
                       {
                           "id":  "fc_bit_chem_02",
                           "subject":  "Chemistry",
                           "exam":  "BITSAT",
                           "chapter":  "Alcohols, Phenols \u0026 Ethers",
                           "front":  "Lucas Test \u0026 Phenol Reagent Time Benchmarks",
                           "back":  "Lucas Reagent: Conc. HCl + Anhydrous ZnCl2\n3° alcohol: Immediate turbidity (0 seconds)\n2° alcohol: Turbidity within 5 minutes\n1° alcohol: Turbidity only on heating",
                           "note":  "Direct 3-second question in BITSAT. Phenol with neutral FeCl3 gives violet color."
                       },
                       {
                           "id":  "fc_bit_math_01",
                           "subject":  "Mathematics",
                           "exam":  "BITSAT",
                           "chapter":  "Binomial Theorem",
                           "front":  "Term Independent of x Shortcut",
                           "back":  "In the expansion of (a x^p + b / x^q)^n:\nIndex of constant term: r = (n · p) / (p + q)\nTerm is T_{r+1} = nCr · a^(n-r) · b^r",
                           "note":  "Calculates term independent of x in under 10 seconds for BITSAT without writing general expansion."
                       },
                       {
                           "id":  "fc_bit_math_02",
                           "subject":  "Mathematics",
                           "exam":  "BITSAT",
                           "chapter":  "Integral Calculus \u0026 Curves",
                           "front":  "Area Enclosed by Standard Parabolas",
                           "back":  "Area between y² = 4ax and x² = 4by is: Area = (16 a b) / 3\nArea between y² = 4ax and line y = mx: Area = 8a² / (3m³)",
                           "note":  "Guaranteed 1 BITSAT question every year. Avoid integration; use direct 16ab/3 shortcut."
                       },
                       {
                           "id":  "fc_eam_phy_01",
                           "subject":  "Physics",
                           "exam":  "EAMCET",
                           "chapter":  "Fluid Mechanics \u0026 Surface Tension",
                           "front":  "Jurin\u0027s Law of Capillary Rise \u0026 Excess Pressure",
                           "back":  "Height of liquid in capillary: h = (2 T cos θ) / (r ρ g)\nExcess pressure in liquid drop: ΔP = 2T / R\nExcess pressure in soap bubble: ΔP = 4T / R",
                           "note":  "Direct formula substitution in EAMCET. Watch out: pure water with clean glass has contact angle θ = 0° (cos θ = 1)."
                       },
                       {
                           "id":  "fc_eam_phy_02",
                           "subject":  "Physics",
                           "exam":  "EAMCET",
                           "chapter":  "Ray Optics \u0026 Prism",
                           "front":  "Prism Refractive Index Minimum Deviation",
                           "back":  "μ = [ sin((A + D_m)/2) ] / [ sin(A/2) ]\nFor small angle prism (A \u003c 10°): D = (μ - 1) A",
                           "note":  "Tested in virtually every EAMCET exam session. Direct plug-and-chug."
                       },
                       {
                           "id":  "fc_eam_chem_01",
                           "subject":  "Chemistry",
                           "exam":  "EAMCET",
                           "chapter":  "Ionic Equilibrium \u0026 Buffers",
                           "front":  "Henderson-Hasselbalch Equation for Buffer pH",
                           "back":  "Acidic buffer: pH = pKa + log([Conjugate Base] / [Weak Acid])\nBasic buffer: pOH = pKb + log([Conjugate Acid] / [Weak Base])\npH = 14 - pOH",
                           "note":  "EAMCET favourite: When [Salt] = [Acid], pH = pKa (maximum buffer capacity)."
                       },
                       {
                           "id":  "fc_eam_chem_02",
                           "subject":  "Chemistry",
                           "exam":  "EAMCET",
                           "chapter":  "Electrochemistry",
                           "front":  "Faraday\u0027s Laws \u0026 Kohlrausch\u0027s Independent Migration",
                           "back":  "Mass deposited: m = Z · I · t = (Equivalent Weight / 96500) · I · t\nΛ°m (electrolyte) = ν+ λ°+ + ν- λ°-\nDegree of dissociation α = Λm / Λ°m",
                           "note":  "EAMCET asks direct charge calculation Q = I · t and equivalent weight = Molar mass / n-factor."
                       },
                       {
                           "id":  "fc_eam_math_01",
                           "subject":  "Mathematics",
                           "exam":  "EAMCET",
                           "chapter":  "Matrices \u0026 Determinants",
                           "front":  "Adjoint \u0026 Inverse Properties Speed Bank",
                           "back":  "For an n × n matrix A:\n1. |adj(A)| = |A|^(n-1)\n2. |adj(adj(A))| = |A|^((n-1)²)\n3. adj(AB) = adj(B) · adj(A)\n4. A · adj(A) = |A| · I_n",
                           "note":  "In EAMCET (where n = 3), |adj(A)| = |A|² and |adj(adj(A))| = |A|⁴."
                       },
                       {
                           "id":  "fc_eam_math_02",
                           "subject":  "Mathematics",
                           "exam":  "EAMCET",
                           "chapter":  "Straight Lines \u0026 Coordinate Geometry",
                           "front":  "Distance Between Parallel Lines \u0026 Orthocenter in Right Triangle",
                           "back":  "Distance between ax + by + c1 = 0 and ax + by + c2 = 0:\nd = |c1 - c2| / √(a² + b²)\nIn a right angled triangle:\nOrthocenter = Vertex containing 90° angle.\nCircumcenter = Midpoint of hypotenuse.",
                           "note":  "Guaranteed 10-second mark in EAMCET when asked to find orthocenter without solving 3 equations."
                       }
                   ]
};
